document.getElementById('geoButton').addEventListener('click', function() {
    const apiKey = 'at_Mn6mVYoHLcLqHqEOsLvQwiWqMpZbC';
    const ipAddress = document.getElementById('ipInput').value;

    fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipAddress}`)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.classList.remove('hidden');

            if (data.location) {
                resultDiv.innerHTML = `
                    <p><strong>IP:</strong> ${data.ip}</p>
                    <p><strong>País:</strong> ${data.location.country}</p>
                    <p><strong>Região:</strong> ${data.location.region}</p>
                    <p><strong>Cidade:</strong> ${data.location.city || 'N/A'}</p>
                    <p><strong>Latitude:</strong> ${data.location.lat}</p>
                    <p><strong>Longitude:</strong> ${data.location.lng}</p>
                `;
                resultDiv.style.opacity = "1";
            } else {
                resultDiv.innerHTML = '<p>Não foi possível obter a localização. Verifique o IP e tente novamente.</p>';
            }
        })
        .catch(error => {
            const resultDiv = document.getElementById('result');
            resultDiv.classList.remove('hidden');
            resultDiv.innerHTML = '<p>Ocorreu um erro ao obter os dados.</p>';
            resultDiv.style.opacity = "1";
            console.error('Erro:', error);
        });
});
