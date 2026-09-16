// ==========================================================================
// 📊 PART 1: CORE INTERACTION ENGINE - CLIPBOARD UTILITIES & VIEW TOGGLES
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
    const copyBtn = document.getElementById("copyBtn");

    //--- QR Code Selection Subsystems Nodes
    const copyTrcRow = document.getElementById("copyTrcRow");
    const copyBepRow = document.getElementById("copyBepRow");
    const toggleTrcQrBtn = document.getElementById("toggleTrcQrBtn");
    const toggleBepQrBtn = document.getElementById("toggleBepQrBtn");
    const trcQrWrapper = document.getElementById("trcQrWrapper");
    const bepQrWrapper = document.getElementById("bepQrWrapper");

    //--- 📋 Click Rows Instant Clipboard Actions Engine
    if (copyTrcRow) {
        copyTrcRow.addEventListener("click", () => {
            const trcAddress = document.getElementById("trcAddrText").innerText;
            navigator.clipboard.writeText(trcAddress).then(() => {
                alert("📋 TRC20 Wallet Address successfully copied to clipboard!");
            });
        });
    }

    if (copyBepRow) {
        copyBepRow.addEventListener("click", () => {
            const bepAddress = document.getElementById("bepAddrText").innerText;
            navigator.clipboard.writeText(bepAddress).then(() => {
                alert("📋 BEP20 Wallet Address successfully copied to clipboard!");
            });
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
// ==========================================================================
// 📊 PART 2: UI VIEWPORT LIGHTBOX MODALS & SECURE PAYLOAD COMPILATION
// ==========================================================================

    //--- 📊 Same-Page Chart & QR Lightbox Modals Zoom Engine
    if (tvWrapper) {
        tvWrapper.addEventListener("click", () => {
            popupModalImage.src = "chart_sample.png";
            imageViewerModal.style.display = "flex";
        });
    }

    if (mt5Wrapper) {
        mt5Wrapper.addEventListener("click", () => {
            popupModalImage.src = "mt5_sample.png";
            imageViewerModal.style.display = "flex";
        });
    }

    // Event Trigger Hooks to intercept clicks on QR code elements
    if (trcQrWrapper) {
        trcQrWrapper.addEventListener("click", () => {
            popupModalImage.src = "qr_trc20.png";
            imageViewerModal.style.display = "flex";
        });
    }

    if (bepQrWrapper) {
        bepQrWrapper.addEventListener("click", () => {
            popupModalImage.src = "qr_bep20.png";
            imageViewerModal.style.display = "flex";
        });
    }

    if (closeImgBtn) {
        closeImgBtn.addEventListener("click", () => {
            imageViewerModal.style.display = "none";
        });
    }

    imageViewerModal.addEventListener("click", (e) => {
        if (e.target === imageViewerModal) {
            imageViewerModal.style.display = "none";
        }
    });

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
            
            // Check for modal element existence to safeguard compilation
            if (modalDataText && successModal) {
                modalDataText.innerText = visiblePayload;
                successModal.style.display = "flex";
            } else {
                // Failback trace log if successModal nodes are missing inside your HTML layout
                console.log("Compiled System Payload:\n", visiblePayload);
                alert("🚀 Request Form Compiled! Operational team notifying loop ongoing.");
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

    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            const rawPayload = modalDataText.innerText;
            navigator.clipboard.writeText(rawPayload).then(() => {
                alert("📋 Secure registration payload data copied to clipboard!");
            });
        });
    }
});

successModal.style.display = "flex";

