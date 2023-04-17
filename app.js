const url = "https://thronesapi.com/api/v2/Characters"
const req = new XMLHttpRequest()
req.open("GET", url)
req.responseType = "json"
req.onload = () => {
    let pers = req.response
    const letter = document.querySelector('.name')
    const but = document.querySelector('.but')
    const body = document.querySelector('.bod')
    

    but.addEventListener('click', () => {
        let names = []
        body.innerHTML = ''
        for (let i = 0; i < pers.length; i++) {
            if (pers[i].firstName.slice(0, 1).toLowerCase() == letter.value.toLowerCase()) {
                localStorage.setItem('letters', letter.value)
                const card = document.createElement('div')
                const img = document.createElement('div')
                const full = document.createElement('div')
                const title = document.createElement('div')
                const family = document.createElement('div')

                card.style.cssText = "width: 225px;height: 450px;border: 2px black solid;display: flex;flex-direction: column;justify-content: space-between;box-sizing: border-box;"
                img.style.cssText = "width: 100%;height: 50%;background-position: center;background-size: cover;"
                full.style.cssText = "width: 100%;height: 16%;font-weight: bold;text-align: center;font-size: 30px;"
                title.style.cssText = "width: 100%;height: 16%;text-align: center;font-size: 30px;padding-top: 20px;"
                family.style.cssText = "width: 100%;height: 16%;font-weight: bold;text-align: center;font-size: 30px;"
                
                if (!(pers[i].firstName in names)) {
                    localStorage.setItem(`full${i}`, pers[i].fullName)
                    localStorage.setItem(`img${i}`, pers[i].imageUrl)
                    localStorage.setItem(`title${i}`, pers[i].title)
                    localStorage.setItem(`family${i}`, pers[i].family)
                    names.push(pers[i].firstName)
                    img.style.backgroundImage = `url(${localStorage.getItem(`img${i}`)})`
                    full.innerHTML = localStorage.getItem(`full${i}`)
                    title.innerHTML = localStorage.getItem(`title${i}`)
                    family.innerHTML = localStorage.getItem(`family${i}`)
                    card.append(img)
                    card.append(full)
                    card.append(title)
                    card.append(family)
                    body.append(card)
                }
            }
        }
    })
    let names = []
    body.innerHTML = ''
    console.log(localStorage.getItem('letters'))
    console.log(localStorage.getItem('letters'))
    for (let i = 0; i < pers.length; i++) {
        if (pers[i].firstName.slice(0, 1).toLowerCase() == localStorage.getItem('letters').toLowerCase()) {
            const card = document.createElement('div')
            const img = document.createElement('div')
            const full = document.createElement('div')
            const title = document.createElement('div')
            const family = document.createElement('div')

            card.style.cssText = "width: 225px;height: 450px;border: 2px black solid;display: flex;flex-direction: column;justify-content: space-between;box-sizing: border-box;"
            img.style.cssText = "width: 100%;height: 50%;background-position: center;background-size: cover;"
            full.style.cssText = "width: 100%;height: 16%;font-weight: bold;text-align: center;font-size: 30px;"
            title.style.cssText = "width: 100%;height: 16%;text-align: center;font-size: 30px;padding-top: 20px;"
            family.style.cssText = "width: 100%;height: 16%;font-weight: bold;text-align: center;font-size: 30px;"
            
            if (!(pers[i].firstName in names)) {
                localStorage.setItem(`full${i}`, pers[i].fullName)
                localStorage.setItem(`img${i}`, pers[i].imageUrl)
                localStorage.setItem(`title${i}`, pers[i].title)
                localStorage.setItem(`family${i}`, pers[i].family)
                names.push(pers[i].firstName)
                img.style.backgroundImage = `url(${localStorage.getItem(`img${i}`)})`
                full.innerHTML = localStorage.getItem(`full${i}`)
                title.innerHTML = localStorage.getItem(`title${i}`)
                family.innerHTML = localStorage.getItem(`family${i}`)
                card.append(img)
                card.append(full)
                card.append(title)
                card.append(family)
                body.append(card)
            }
        }
    }
}
req.send()