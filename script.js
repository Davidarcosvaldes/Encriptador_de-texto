// script.js

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const sidebarText = document.getElementById('sidebar-text');
    const sidebarImage = document.getElementById('sidebar-image');
    const copyBtn = document.getElementById('copy-btn');

    const encryptText = (text) => {
        const rules = [
            { from: 'e', to: 'enter' },
            { from: 'i', to: 'imes' },
            { from: 'a', to: 'ai' },
            { from: 'o', to: 'ober' },
            { from: 'u', to: 'ufat' }
        ];
        return rules.reduce((acc, rule) => acc.replaceAll(rule.from, rule.to), text);
    };

    const decryptText = (text) => {
        const rules = [
            { from: 'enter', to: 'e' },
            { from: 'imes', to: 'i' },
            { from: 'ai', to: 'a' },
            { from: 'ober', to: 'o' },
            { from: 'ufat', to: 'u' }
        ];
        return rules.reduce((acc, rule) => acc.replaceAll(rule.from, rule.to), text);
    };

    const updateSidebar = (text) => {
        if (text) {
            sidebarText.textContent = text;
            sidebarImage.style.display = 'none';
            copyBtn.style.display = 'block';
        } else {
            sidebarText.textContent = 'No veo texto';
            sidebarImage.style.display = 'block';
            copyBtn.style.display = 'none';
        }
    };

    encryptBtn.addEventListener('click', () => {
        const encrypted = encryptText(inputText.value);
        updateSidebar(encrypted);
    });

    decryptBtn.addEventListener('click', () => {
        const decrypted = decryptText(inputText.value);
        updateSidebar(decrypted);
    });

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(sidebarText.textContent)
            .then(() => alert('Texto copiado al portapapeles'))
            .catch(err => alert('Error al copiar el texto'));
    });
});