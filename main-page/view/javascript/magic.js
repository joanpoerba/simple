const base = document.querySelector('.base')
const footer = document.querySelector('.bottomBar')
const likeStatus = document.querySelectorAll('#likeStatus')
const toogle = document.querySelector('#toogle')
const popUpWrapper = document.querySelector('.popUpWrapper')
const popUpMenu = document.querySelector('.popUpMenu')
const exitPopUp = document.querySelector('#exitPopUp')
const okeyBtn = document.querySelector('.okeyBtn')

exitPopUp.style.cursor = 'pointer'
popUpWrapper.style.display = 'none'

toogle.addEventListener('click', () => {
  popUpWrapper.style.display = 'flex'
})

exitPopUp.addEventListener('click', () => {
  popUpWrapper.style.display = 'none'
})

const hiddenTxt = document.querySelector('.hiddenTxt')
const whyBtn = document.querySelector(".whyBtn")

hiddenTxt.style.opacity = '0'

whyBtn.addEventListener('click', () => {
  hiddenTxt.classList.toggle('showHiddenTxt')
  if(hiddenTxt.classList.contains('showHiddenTxt')){
    hiddenTxt.style.opacity = '1'
    hiddenTxt.style.transition = '0.5s'
  } else {
    hiddenTxt.style.opacity = '0'
    hiddenTxt.style.transition = '0.5s'
  }
})

const likeBtn = document.querySelector('#like')

likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('likeAnimate')
  if(likeBtn.classList.contains('likeAnimate')){
    likeBtn.style.color = '#0085DE'
    likeBtn.style.fill = '#0085DE'
  } else {
    likeBtn.style.color = 'black'
    likeBtn.style.fill = 'white'
  }
})

const command = document.querySelector('#command')
const commandWrapper = document.querySelector('.commandWrapper')

command.addEventListener('click', () => {
  commandWrapper.style.bottom = '0'
})

const exit = document.querySelector('#exit')

exit.addEventListener('click', () => {
  commandWrapper.style.bottom = '-600px'
})

const share = document.querySelector('#share')
const sendPostWrapper = document.querySelector('.sendPostWrapper')

share.addEventListener('click', () => {
  sendPostWrapper.style.top = '0vw'
  sendPostWrapper.style.transition = '1s'
  footer.style.background = 'rgba(34, 34, 34, 0.04)'
  footer.style.color = 'white'

  search.addEventListener('click', () => {
    myStatusWrapper.style.display = 'none'
    StatusAltafWrapper.style.display = 'none'
    StatusRifkiWrapper.style.display = 'none'
    StatusBrajaWrapper.style.display = 'none'

    searchSection.style.left = '0vw'
    searchSection.style.transition = '1s'

    footer.style.background = 'rgb(243, 243, 243)'
    footer.style.color = 'black'
  
    home.addEventListener('click', () => {
      searchSection.style.left = '100vw'
      searchSection.style.transition = '1s'
    })
  })
})

const home = document.querySelector('#home')

home.addEventListener('click', () => {
  sendPostWrapper.style.top = '-900px'
  footer.style.background = 'rgb(243, 243, 243)'
  footer.style.color = 'black'
})

const statusSayaPp = document.querySelector('.statusSayaPp')
const myStatusWrapper = document.querySelector('.myStatusWrapper')
const slideStatusSaya = document.querySelector('.slideStatusSaya')

const statusAltafPp = document.querySelector('.statusAltafPp')
const StatusAltafWrapper = document.querySelector('.StatusAltafWrapper')
const slideKiriAltaf = document.querySelector('.slideKiriAltaf')
const slideKananAltaf = document.querySelector('.slideKananAltaf')

const statusRifkiPp = document.querySelector('.statusRifkiPp')
const StatusRifkiWrapper = document.querySelector('.StatusRifkiWrapper')
const slideKiriRifki = document.querySelector('.slideKiriRifki')
const slideKananRifki = document.querySelector('.slideKananRifki')

const statusBrajaPp = document.querySelector('.statusBrajaPp')
const StatusBrajaWrapper = document.querySelector('.StatusBrajaWrapper')
const slideKiriBraja = document.querySelector('.slideKiriBraja')

statusSayaPp.addEventListener('click', () => {
  myStatusWrapper.style.display = 'block'
  footer.style.background = 'none'
  footer.style.color = 'white'
  commandWrapper.style.bottom = '-600px'

  StatusAltafWrapper.style.display = 'block'
  StatusRifkiWrapper.style.display = 'block'
  StatusBrajaWrapper.style.display = 'block'

  StatusAltafWrapper.style.left = '100vw'
  StatusRifkiWrapper.style.left = '100vw'
  StatusBrajaWrapper.style.left = '100vw'
  
  myStatusWrapper.style.left = '0'

  slideStatusSaya.addEventListener('click', () => {
    myStatusWrapper.style.left = '-100vw'
    myStatusWrapper.style.transition = '1s'

    slideKiriAltaf.addEventListener('click', () => {
      myStatusWrapper.style.left = '0vw'
      myStatusWrapper.style.transition = '1s'
      
      StatusAltafWrapper.style.left = '100vw'
    })
    
    slideKananAltaf.addEventListener('click', () => {
      StatusRifkiWrapper.style.left = '0vw'
      StatusRifkiWrapper.style.transition = '1s'

      StatusAltafWrapper.style.left  = '-100vw'
    })

    slideKiriRifki.addEventListener('click', () => {
      StatusAltafWrapper.style.left = '0vw'
      StatusAltafWrapper.style.transition = '1s'
      
      StatusRifkiWrapper.style.left = '100vw'
    })

    slideKananRifki.addEventListener('click', () => {
      StatusBrajaWrapper.style.left = '0vw'
      StatusBrajaWrapper.style.transition = '1s'

      StatusRifkiWrapper.style.left = '-100vw'
    })
    
    slideKiriBraja.addEventListener('click', () => {
      StatusRifkiWrapper.style.left = '0vw'
      StatusBrajaWrapper.style.transition = '1s'

      StatusBrajaWrapper.style.left = '100vw'
    })

    StatusAltafWrapper.style.left = '0'
    StatusAltafWrapper.style.transition = '1s'

    likeStatus.forEach(likeStatusBtn => {
      likeStatusBtn.style.color = '#0085DE'
      likeStatusBtn.addEventListener('click', () => {
        likeStatusBtn.classList.toggle('likeAnimate')
        if(likeStatusBtn.classList.contains('likeAnimate')){
          likeStatusBtn.style.color = '#0085DE'
          likeStatusBtn.style.fill = '#0085DE'
        } else {
          likeStatusBtn.style.color = '#0085DE'
          likeStatusBtn.style.fill = 'none'
        }
      })
    });
  })

  home.addEventListener('click', () => {
    myStatusWrapper.style.display = 'none'
    StatusAltafWrapper.style.display = 'none'
    StatusRifkiWrapper.style.display = 'none'
    StatusBrajaWrapper.style.display = 'none'
  })

  searchSection.style.left = '100vw'

  search.addEventListener('click', () => {
    myStatusWrapper.style.display = 'none'
    StatusAltafWrapper.style.display = 'none'
    StatusRifkiWrapper.style.display = 'none'
    StatusBrajaWrapper.style.display = 'none'

    searchSection.style.left = '0vw'
    searchSection.style.transition = '1s'

    footer.style.background = 'rgb(243, 243, 243)'
    footer.style.color = 'black'
  
    home.addEventListener('click', () => {
      searchSection.style.left = '100vw'
      searchSection.style.transition = '1s'
    })
  })

  send.addEventListener('click', () => {
    myStatusWrapper.style.display = 'none'
    StatusAltafWrapper.style.display = 'none'
    StatusRifkiWrapper.style.display = 'none'
    StatusBrajaWrapper.style.display = 'none'
  
    searchSection.style.left = '100vw'
  
    messageWrapper.style.left = '0vw'
    messageWrapper.style.transition = '1s'
  
    footer.style.background = 'none'
    footer.style.color = 'white'
  })
})

statusAltafPp.addEventListener('click', () => {
  StatusAltafWrapper.style.display = 'block'
  footer.style.background = 'none'
  footer.style.color = 'white'
  commandWrapper.style.bottom = '-600px'

  myStatusWrapper.style.display = 'block'
  StatusAltafWrapper.style.display = 'block'
  StatusRifkiWrapper.style.display = 'block'
  StatusBrajaWrapper.style.display = 'block'

  myStatusWrapper.style.left = '-100vw'
  StatusAltafWrapper.style.left = '0vw'
  StatusRifkiWrapper.style.left = '100vw'
  StatusBrajaWrapper.style.left = '100vw'

  slideStatusSaya.addEventListener('click', () => {
    myStatusWrapper.style.left = '-100vw'
    myStatusWrapper.style.transition = '1s'

    StatusAltafWrapper.style.left = '0'
    StatusAltafWrapper.style.transition = '1s'
  })

  slideKiriAltaf.addEventListener('click', () => {
    myStatusWrapper.style.left = '0vw'
    myStatusWrapper.style.transition = '1s'
    
    StatusAltafWrapper.style.left = '100vw'
    StatusAltafWrapper.style.transition = '1s'
  })

  slideKananAltaf.addEventListener('click', () => {
    StatusAltafWrapper.style.left = '-100vw'
    StatusAltafWrapper.style.transition = '1s'
    
    StatusRifkiWrapper.style.left = '0vw'
    StatusRifkiWrapper.style.transition = '1s'
  })
  
  slideKiriRifki.addEventListener('click', () => {
    StatusAltafWrapper.style.left = '0vw'
    StatusAltafWrapper.style.transition = '1s'
    
    StatusRifkiWrapper.style.left = '100vw'
    StatusRifkiWrapper.style.transition = '1s'
  })
  
  slideKananRifki.addEventListener('click', () => {
    StatusBrajaWrapper.style.left = '0vw'
    StatusBrajaWrapper.style.transition = '1s'
    
    StatusRifkiWrapper.style.left = '-100vw'
    StatusRifkiWrapper.style.transition = '1s'
  })
  
  slideKiriBraja.addEventListener('click', () => {
    StatusRifkiWrapper.style.left = '0vw'
    StatusBrajaWrapper.style.transition = '1s'
    
    StatusBrajaWrapper.style.left = '100vw'
    StatusBrajaWrapper.style.transition = '1s'
  })

  likeStatus.forEach(likeStatusBtn => {
    likeStatusBtn.style.color = '#0085DE'
    likeStatusBtn.addEventListener('click', () => {
      likeStatusBtn.classList.toggle('likeAnimate')
      if(likeStatusBtn.classList.contains('likeAnimate')){
        likeStatusBtn.style.color = '#0085DE'
        likeStatusBtn.style.fill = '#0085DE'
      } else {
        likeStatusBtn.style.color = '#0085DE'
        likeStatusBtn.style.fill = 'none'
      }
    })
  });

  home.addEventListener('click', () => {
    myStatusWrapper.style.display = 'none'
    StatusAltafWrapper.style.display = 'none'
    StatusRifkiWrapper.style.display = 'none'
    StatusBrajaWrapper.style.display = 'none'
  })

  searchSection.style.left = '100vw'

  search.addEventListener('click', () => {
    myStatusWrapper.style.display = 'none'
    StatusAltafWrapper.style.display = 'none'
    StatusRifkiWrapper.style.display = 'none'
    StatusBrajaWrapper.style.display = 'none'

    searchSection.style.left = '0vw'
    searchSection.style.transition = '1s'

    footer.style.background = 'rgb(243, 243, 243)'
    footer.style.color = 'black'
  
    home.addEventListener('click', () => {
      searchSection.style.left = '100vw'
      searchSection.style.transition = '1s'
    })
  })

  send.addEventListener('click', () => {
    myStatusWrapper.style.display = 'none'
    StatusAltafWrapper.style.display = 'none'
    StatusRifkiWrapper.style.display = 'none'
    StatusBrajaWrapper.style.display = 'none'
  
    searchSection.style.left = '100vw'
  
    messageWrapper.style.left = '0vw'
    messageWrapper.style.transition = '1s'
  
    footer.style.background = 'none'
    footer.style.color = 'white'
  })
})

statusRifkiPp.addEventListener('click', () => {
  StatusRifkiWrapper.style.display = 'block'
  footer.style.background = 'none'
  footer.style.color = 'white'
  commandWrapper.style.bottom = '-600px'

  myStatusWrapper.style.display = 'block'
  StatusAltafWrapper.style.display = 'block'
  StatusRifkiWrapper.style.display = 'block'
  StatusBrajaWrapper.style.display = 'block'

  myStatusWrapper.style.left = '-100vw'
  StatusAltafWrapper.style.left = '-100vw'
  StatusRifkiWrapper.style.left = '0vw'
  StatusBrajaWrapper.style.left = '100vw'

  slideStatusSaya.addEventListener('click', () => {
    myStatusWrapper.style.left = '-100vw'
    myStatusWrapper.style.transition = '1s'

    StatusAltafWrapper.style.left = '0'
    StatusAltafWrapper.style.transition = '1s'
  })

  slideKiriAltaf.addEventListener('click', () => {
    myStatusWrapper.style.left = '0vw'
    myStatusWrapper.style.transition = '1s'
    
    StatusAltafWrapper.style.left = '100vw'
    StatusAltafWrapper.style.transition = '1s'
  })

  slideKananAltaf.addEventListener('click', () => {
    StatusAltafWrapper.style.left = '-100vw'
    StatusAltafWrapper.style.transition = '1s'
    
    StatusRifkiWrapper.style.left = '0vw'
    StatusRifkiWrapper.style.transition = '1s'
  })
  
  slideKiriRifki.addEventListener('click', () => {
    StatusAltafWrapper.style.left = '0vw'
    StatusAltafWrapper.style.transition = '1s'
    
    StatusRifkiWrapper.style.left = '100vw'
    StatusRifkiWrapper.style.transition = '1s'
  })
  
  slideKananRifki.addEventListener('click', () => {
    StatusBrajaWrapper.style.left = '0vw'
    StatusBrajaWrapper.style.transition = '1s'
    
    StatusRifkiWrapper.style.left = '-100vw'
    StatusRifkiWrapper.style.transition = '1s'
  })
  
  slideKiriBraja.addEventListener('click', () => {
    StatusRifkiWrapper.style.left = '0vw'
    StatusBrajaWrapper.style.transition = '1s'
    
    StatusBrajaWrapper.style.left = '100vw'
    StatusBrajaWrapper.style.transition = '1s'
  })

  likeStatus.forEach(likeStatusBtn => {
    likeStatusBtn. style.color = '#0085DE'
    likeStatusBtn.addEventListener('click', () => {
      likeStatusBtn. classList.toggle('likeAnimate')
      if(likeStatusBtn. classList.contains('likeAnimate')){
        likeStatusBtn. style.color = '#0085DE'
        likeStatusBtn. style.fill = '#0085DE'
      } else {
        likeStatusBtn. style.color = '#0085DE'
        likeStatusBtn. style.fill = 'none'
      }
    })
  });

  home.addEventListener('click', () => {
    myStatusWrapper.style.display = 'none'
    StatusAltafWrapper.style.display = 'none'
    StatusRifkiWrapper.style.display = 'none'
    StatusBrajaWrapper.style.display = 'none'
  })

  searchSection.style.left = '100vw'

  search.addEventListener('click', () => {
    myStatusWrapper.style.display = 'none'
    StatusAltafWrapper.style.display = 'none'
    StatusRifkiWrapper.style.display = 'none'
    StatusBrajaWrapper.style.display = 'none'

    searchSection.style.left = '0vw'
    searchSection.style.transition = '1s'

    footer.style.background = 'rgb(243, 243, 243)'
    footer.style.color = 'black'
  
    home.addEventListener('click', () => {
      searchSection.style.left = '100vw'
      searchSection.style.transition = '1s'
    })
  })

  send.addEventListener('click', () => {
    myStatusWrapper.style.display = 'none'
    StatusAltafWrapper.style.display = 'none'
    StatusRifkiWrapper.style.display = 'none'
    StatusBrajaWrapper.style.display = 'none'
  
    searchSection.style.left = '100vw'
  
    messageWrapper.style.left = '0vw'
    messageWrapper.style.transition = '1s'
  
    footer.style.background = 'none'
    footer.style.color = 'white'
  })
})

statusBrajaPp.addEventListener('click', () => {
  StatusBrajaWrapper.style.display = 'block'
  footer.style.background = 'none'
  footer.style.color = 'white'
  commandWrapper.style.bottom = '-600px'

  myStatusWrapper.style.display = 'block'
  StatusAltafWrapper.style.display = 'block'
  StatusRifkiWrapper.style.display = 'block'
  StatusBrajaWrapper.style.display = 'block'

  myStatusWrapper.style.left = '-100vw'
  StatusAltafWrapper.style.left = '-100vw'
  StatusRifkiWrapper.style.left = '-100vw'
  StatusBrajaWrapper.style.left = '0vw'

  slideStatusSaya.addEventListener('click', () => {
    myStatusWrapper.style.left = '-100vw'
    myStatusWrapper.style.transition = '1s'

    StatusAltafWrapper.style.left = '0'
    StatusAltafWrapper.style.transition = '1s'
  })

  slideKiriAltaf.addEventListener('click', () => {
    myStatusWrapper.style.left = '0vw'
    myStatusWrapper.style.transition = '1s'
    
    StatusAltafWrapper.style.left = '100vw'
    StatusAltafWrapper.style.transition = '1s'
  })

  slideKananAltaf.addEventListener('click', () => {
    StatusAltafWrapper.style.left = '-100vw'
    StatusAltafWrapper.style.transition = '1s'
    
    StatusRifkiWrapper.style.left = '0vw'
    StatusRifkiWrapper.style.transition = '1s'
  })
  
  slideKiriRifki.addEventListener('click', () => {
    StatusAltafWrapper.style.left = '0vw'
    StatusAltafWrapper.style.transition = '1s'
    
    StatusRifkiWrapper.style.left = '100vw'
    StatusRifkiWrapper.style.transition = '1s'
  })
  
  slideKananRifki.addEventListener('click', () => {
    StatusBrajaWrapper.style.left = '0vw'
    StatusBrajaWrapper.style.transition = '1s'
    
    StatusRifkiWrapper.style.left = '-100vw'
    StatusRifkiWrapper.style.transition = '1s'
  })
  
  slideKiriBraja.addEventListener('click', () => {
    StatusRifkiWrapper.style.left = '0vw'
    StatusRifkiWrapper.style.transition = '1s'
    
    StatusBrajaWrapper.style.left = '100vw'
    StatusBrajaWrapper.style.transition = '1s'
  })

  likeStatus.forEach(likeStatusBtn => {
    likeStatusBtn.style.color = '#0085DE'
    likeStatusBtn.addEventListener('click', () => {
      likeStatusBtn.classList.toggle('likeAnimate')
      if(likeStatusBtn.classList.contains('likeAnimate')){
        likeStatusBtn.style.color = '#0085DE'
        likeStatusBtn.style.fill = '#0085DE'
      } else {
        likeStatusBtn.style.color = '#0085DE'
        likeStatusBtn.style.fill = 'none'
      }
    })
  });

  home.addEventListener('click', () => {
    myStatusWrapper.style.display = 'none'
    StatusAltafWrapper.style.display = 'none'
    StatusRifkiWrapper.style.display = 'none'
    StatusBrajaWrapper.style.display = 'none'
  })
  
  searchSection.style.left = '100vw'

  search.addEventListener('click', () => {
    myStatusWrapper.style.display = 'none'
    StatusAltafWrapper.style.display = 'none'
    StatusRifkiWrapper.style.display = 'none'
    StatusBrajaWrapper.style.display = 'none'

    searchSection.style.left = '0vw'
    searchSection.style.transition = '1s'

    footer.style.background = 'rgb(243, 243, 243)'
    footer.style.color = 'black'
  
    home.addEventListener('click', () => {
      searchSection.style.left = '100vw'
      searchSection.style.transition = '1s'
    })
  })

  send.addEventListener('click', () => {
    myStatusWrapper.style.display = 'none'
    StatusAltafWrapper.style.display = 'none'
    StatusRifkiWrapper.style.display = 'none'
    StatusBrajaWrapper.style.display = 'none'
  
    searchSection.style.left = '100vw'
  
    messageWrapper.style.left = '0vw'
    messageWrapper.style.transition = '1s'
  
    footer.style.background = 'none'
    footer.style.color = 'white'
  })
})

const search = document.querySelector('#search')
const searchSection = document.querySelector('.searchSection')

searchSection.style.left = '100vw'

search.addEventListener('click', () => {
  messageWrapper.style.display = 'none'

  searchSection.style.left = '0vw'
  searchSection.style.transition = '1s'
  
  home.addEventListener('click', () => {
    searchSection.style.left = '100vw'
    searchSection.style.transition = '1s'
  })
})

const message = document.querySelector('#message')
const messageWrapper = document.querySelector('.messageWrapper')

messageWrapper.style.left = '100vw'

message.addEventListener('click',() => {
  searchSection.style.left = '100vw'

  messageWrapper.style.left = '0vw'
  messageWrapper.style.transition = '1s'
  
  footer.style.background = 'none'
  footer.style.color = 'white'
  
  home.addEventListener('click', () => {
    messageWrapper.style.left = '100vw'
    searchSection.style.display = '100vw'
    searchSection.style.transition = '1s'
  })
  
  search.addEventListener('click', () => {
    // messageWrapper.style.display = 'none'
    messageWrapper.style.left = '-100vw'
    searchSection.style.left = '0vw'
    
    footer.style.background = 'rgb(243, 243, 243)'
    footer.style.color = 'black'
    
    home.addEventListener('click', () => {
      messageWrapper.style.display = 'none'
      messageWrapper.style.transition = '1.5s'

      searchSection.style.display = '100vw'
      searchSection.style.transition = '1s'
    })
  })
})

const deasyMessage = document.querySelector('#deasyMessage')
const deasyMessageWrapper = document.querySelector('.deasyMessageWrapper')

deasyMessage.addEventListener('click', message1 => {
  deasyMessageWrapper.style.left = '0vw'
  deasyMessageWrapper.style.transition = '1s'
  
  home.addEventListener('click', () => {
    deasyMessageWrapper.style.left = '100vw'
    deasyMessageWrapper.style.transition = '1s'
  })
  
  message.addEventListener('click', () => {
    deasyMessageWrapper.style.left = '100vw'
    messageWrapper.style.left = '0'
  })

  searchSection.style.left = '100vw'

  search.addEventListener('click', () => {
    deasyMessageWrapper.style.left = '-100vw'
    deasyMessageWrapper.style.transition = '1s'

    searchSection.style.left = '0vw'
    searchSection.style.transition = '1s'
  
    home.addEventListener('click', () => {
      searchSection.style.left = '100vw'
      searchSection.style.transition = '1s'
    })

    message.addEventListener('click', () => {
      deasyMessageWrapper.style.display = 'none'
    })
  })
})

const gresMessage = document.querySelector('#gresMessage')
const gresMessageWrapper = document.querySelector('.gresMessageWrapper')

gresMessage.addEventListener('click', message1 => {
  gresMessageWrapper.style.left = '0vw'
  gresMessageWrapper.style.transition = '1s'
  
  home.addEventListener('click', () => {
    gresMessageWrapper.style.left = '100vw'
    gresMessageWrapper.style.transition = '1s'
  })
  
  message.addEventListener('click', () => {
    gresMessageWrapper.style.left = '100vw'
    messageWrapper.style.left = '0'
  })

  searchSection.style.left = '100vw'

  search.addEventListener('click', () => {
    gresMessageWrapper.style.left = '-100vw'
    gresMessageWrapper.style.transition = '1s'

    searchSection.style.left = '0vw'
    searchSection.style.transition = '1s'
  
    home.addEventListener('click', () => {
      searchSection.style.left = '100vw'
      searchSection.style.transition = '1s'
    })

    message.addEventListener('click', () => {
      gresMessageWrapper.style.display = 'none'
    })
  })
})

const farisMessage = document.querySelector('#farisMessage')
const farisMessageWrapper = document.querySelector('.farisMessageWrapper')

farisMessage.addEventListener('click', message1 => {
  farisMessageWrapper.style.left = '0vw'
  farisMessageWrapper.style.transition = '1s'
  
  home.addEventListener('click', () => {
    farisMessageWrapper.style.left = '100vw'
    farisMessageWrapper.style.transition = '1s'
  })
  
  message.addEventListener('click', () => {
    farisMessageWrapper.style.left = '100vw'
    messageWrapper.style.left = '0'
  })

  searchSection.style.left = '100vw'

  search.addEventListener('click', () => {
    farisMessageWrapper.style.left = '-100vw'
    farisMessageWrapper.style.transition = '1s'

    searchSection.style.left = '0vw'
    searchSection.style.transition = '1s'
  
    home.addEventListener('click', () => {
      searchSection.style.left = '100vw'
      searchSection.style.transition = '1s'
    })

    message.addEventListener('click', () => {
      gresMessageWrapper.style.display = 'none'
    })
  })
})
