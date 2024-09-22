function downloadFile(filename) {
    var link = document.createElement('a');
    link.href = 'download/' + filename; // Ruta de descarga dentro de la carpeta download
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Mostrar un mensaje temporal de éxito
    showNotification('Descarga iniciada para ' + filename);
}

function showNotification(message) {
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    
    document.body.appendChild(notification);
    
    setTimeout(function () {
        notification.remove();
    }, 3000);
}