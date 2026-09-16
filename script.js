// ==========================================================================
// 📊 QUANTUM SMC CENTRAL ENGINE - REPAIRED DISPATCH LOGIC & EXPANDED ZOOM
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    //--- Master Element Selectors Matrix
    const secureForm = document.getElementById("secureForm");
    const tvWrapper = document.getElementById("tvWrapper");
    const mt5Wrapper = document.getElementById("mt5Wrapper");
    const imageViewerModal = document.getElementById("imageViewerModal");
    const popupModalImage = document.getElementById("popupModalImage");
    const successModal = document.getElementById("successModal");
    const modalDataText = document.getElementById("modalDataText");
    const closeImgBtn = document.getElementById("closeImgBtn");
    const closeSecBtn = document.getElementById("closeSecBtn");

    // DISPATCH TARGET CHANNEL SELECTORS
    const sendTgBtn = document.getElementById("sendTgBtn");
    const sendEmailBtn = document.getElementById("sendEmailBtn");

    //--- QR Code Selection Subsystems Nodes
    const copyTrcRow = document.getElementById("copyTrcRow");
    const copyBepRow = document.getElementById("copyBepRow");
    const toggleTrcQrBtn = document.getElementById("toggleTrcQrBtn");
    const toggleBepQrBtn = document.getElementById("toggleBepQrBtn");
    const trcQrWrapper = document.getElementById("trcQrWrapper");
    const bepQrWrapper = document.getElementById("bepQrWrapper");

    // Explicit structural resetting to safeguard states on hard reload
    if (successModal) successModal.style.display = "none";
    if (imageViewerModal) imageViewerModal.style.display = "none";

    //--- 📋 Click Rows Instant Clipboard Actions Engine
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

    //--- 🖼️ QR Image Drawer Toggles Array Animation Controls
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

    //--- 📊 Same-Page Chart & QR Lightbox Modals Zoom Engine
    // ⚠️ CRITICAL FIX: Ensure filenames match the exact names used inside your HTML file
    if (tvWrapper) {
        tvWrapper.addEventListener("click", () => {
            const imgElement = tvWrapper.querySelector('img');
            popupModalImage.src = imgElement ? imgElement.getAttribute('src') : "chart_sample.png";
            imageViewerModal.style.display = "flex";
        });
    }

    if (mt5Wrapper) {
        mt5Wrapper.addEventListener("click", () => {
            const imgElement = mt5Wrapper.querySelector('img');
            popupModalImage.src = imgElement ? imgElement.getAttribute('src') : "mt5_sample.png";
            imageViewerModal.style.display = "flex";
        });
    }

    if (trcQrWrapper) {
        trcQrWrapper.addEventListener("click", () => {
            const imgElement = trcQrWrapper.querySelector('img');
            popupModalImage.src = imgElement ? imgElement.getAttribute('src') : "qr_trc20.png";
            imageViewerModal.style.display = "flex";
        });
    }

    if (bepQrWrapper) {
        bepQrWrapper.addEventListener("click", () => {
            const imgElement = bepQrWrapper.querySelector('img');
            popupModalImage.src = imgElement ? imgElement.getAttribute('src') : "qr_bep20.png";
            imageViewerModal.style.display = "flex";
        });
    }

    // 🚀 NEW: Dynamic Event Listeners attached directly to the Hardware/iPhone display elements
    const prizeBoxes = document.querySelectorAll('.prize-item-box');
    prizeBoxes.forEach(box => {
        box.style.cursor = 'pointer'; // Turn pointer to hand tool
        box.addEventListener('click', () => {
            const prizeImg = box.querySelector('.prize-img');
            if (prizeImg && popupModalImage && imageViewerModal) {
                popupModalImage.src = prizeImg.getAttribute('src');
                imageViewerModal.style.display = "flex";
            }
        });
    });

    if (closeImgBtn) {
        closeImgBtn.addEventListener("click", () => {
            imageViewerModal.style.display = "none";
        });
    }

    if (imageViewerModal) {
        imageViewerModal.addEventListener("click", (e) => {
            if (e.target === imageViewerModal) {
                imageViewerModal.style.display = "none";
            }
        });
    }

    //--- 📝 Registration Verification Form Data Processors
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

    if (closeSecBtn) {
        closeSecBtn.addEventListener("click", () => {
            successModal.style.display = "none";
        });
    }

    if (successModal) {
        successModal.addEventListener("click", (e) => {
            if (e.target === successModal) {
                successModal.style.display = "none";
            }
        });
    }

    //--- Global Escape Window Key Hook Interceptor
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (successModal) successModal.style.display = "none";
            if (imageViewerModal) imageViewerModal.style.display = "none";
        }
    });

    // DUAL LISTENERS - SILENT DISPATCH ARCHITECTURE
    if (sendTgBtn) {
        sendTgBtn.addEventListener("click", () => {
            const rawPayload = modalDataText.innerText;
            navigator.clipboard.writeText(rawPayload).then(() => {
                window.open("https://t.me/aahil_exchange", '_blank');
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
