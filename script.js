function loading(){
    var date = new Date()
    var hour = date.getHours()
    
    var msg = document.querySelector('div#text')
    msg.innerHTML = `It is now ${hour}h.`

    var img = document.querySelector('img#picture')
    if(hour > 0 && hour < 12){
        msg.innerHTML += ' Good morning!'
        img.src = 'morning-photo.png'
        document.body.style.background = '#fee279'
    } else if (hour >= 12 && hour < 18){
        msg.innerHTML += ' Good afternoon!'
        img.src = 'afternoon-photo.png'
        document.body.style.background = '#d19d14'
    }   else{
        msg.innerHTML += ' Good night!'
        img.src = 'night-photo.png'
        document.body.style.background = '#708a99'
    }
}