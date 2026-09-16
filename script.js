document.addEventListener("DOMContentLoaded", () => {
    const secureForm = document.getElementById("secureForm");
    const tvWrapper = document.getElementById("tvWrapper");
    const mt5Wrapper = document.getElementById("mt5Wrapper");
    const imageViewerModal = document.getElementById("imageViewerModal");
    const popupModalImage = document.getElementById("popupModalImage");
    const successModal = document.getElementById("successModal");
    const modalDataText = document.getElementById("modalDataText");
    const closeImgBtn = document.getElementById("closeImgBtn");
    const closeSecBtn = document.getElementById("closeSecBtn");

    const sendTgBtn = document.getElementById("sendTgBtn");
    const sendEmailBtn = document.getElementById("sendEmailBtn");

    const copyTrcRow = document.getElementById("copyTrcRow");
    const copyBepRow = document.getElementById("copyBepRow");
    const toggleTrcQrBtn = document.getElementById("toggleTrcQrBtn");
    const toggleBepQrBtn = document.getElementById("toggleBepQrBtn");
    const trcQrWrapper = document.getElementById("trcQrWrapper");
    const bepQrWrapper = document.getElementById("bepQrWrapper");

    // Force default clean UI layouts
    if (successModal) successModal.style.display = "none";
    if (imageViewerModal) imageViewerModal.style.display = "none";

    // Clipboard handlers
    if (copyTrcRow) {
        copyTrcRow.addEventListener("click", () => {
            const trcAddress = document.getElementById("trcAddrText").innerText;
            navigator.clipboard.writeText(trcAddress);
        });
    }

    if (copyBepRow) {
        copyBepRow.addEventListener("click", () => {
            const bepAddress = document.getElementById("bepAddrText").innerText;
            navigator.clipboard.writeText(bepAddress);
        });
    }

    // QR Image Drawer Toggle Controllers
    if (toggleTrcQrBtn && trcQrWrapper) {
        toggleTrcQrBtn.addEventListener("click", () => {
            if (trcQrWrapper.style.display === "flex") {
                trcQrWrapper.style.display = "none";
                toggleTrcQrBtn.innerText = "🖼️ View TRC20 QR Code";
            } else {
                trcQrWrapper.style.display = "flex";
                toggleTrcQrBtn.innerText = "❌ Hide TRC20 QR Code";
            }
        });
    }

    if (toggleBepQrBtn && bepQrWrapper) {
        toggleBepQrBtn.addEventListener("click", () => {
            if (bepQrWrapper.style.display === "flex") {
                bepQrWrapper.style.display = "none";
                toggleBepQrBtn.innerText = "🖼️ View BEP20 QR Code";
            } else {
                bepQrWrapper.style.display = "flex";
                toggleBepQrBtn.innerText = "❌ Hide BEP20 QR Code";
            }
        });
    }

    // Form compilers and submission handlers
    if (secureForm) {
        secureForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const platform = document.getElementById("platform").value;
            const network = document.getElementById("network").value;
            const username = document.getElementById("username").value || "None Provided";
            const txid = document.getElementById("txid").value.trim();
            
            let visiblePayload = `SECURE QUANTUM SMC CLIENT RECORD DATA\n`;
            visiblePayload += `------------------------------------\n`;
            visiblePayload += `License Holder: ${name}\n`;
            visiblePayload += `Verification Email: ${email}\n`;
            visiblePayload += `Target Deployment Core: ${platform}\n`;
            visiblePayload += `Remittance Protocol: USDT-${network}\n`;
            visiblePayload += `Client Handlers Reference: ${username}\n`;
            visiblePayload += `Cryptographic Transaction ID: ${txid}\n`;
            visiblePayload += `Chronological Indexing Priority Log: Confirmed`;
            
            if (modalDataText && successModal) {
                modalDataText.innerText = visiblePayload;
                successModal.style.display = "flex";
            }
        });
    }

    // Modal termination actions
    if (closeSecBtn) {
        closeSecBtn.addEventListener("click", () => {
            successModal.style.display = "none";
        });
    }

    // Dual action handlers routing silently to channels
    if (sendTgBtn) {
        sendTgBtn.addEventListener("click", () => {
            const rawPayload = modalDataText.innerText;
            navigator.clipboard.writeText(rawPayload).then(() => {
                window.open("https://t.me", '_blank');
            });
        });
    }

    if (sendEmailBtn) {
        sendEmailBtn.addEventListener("click", () => {
            const rawPayload = modalDataText.innerText;
            navigator.clipboard.writeText(rawPayload).then(() => {
                const emailTarget = "realtimecooder@gmail.com";
                const emailSubject = encodeURIComponent("Quantum SMC License Deployment Verification Hash");
                const emailBody = encodeURIComponent(rawPayload);
                window.open(`mailto:${emailTarget}?subject=${emailSubject}&body=${emailBody}`, '_blank');
            });
        });
    }
});
