class TemplateManager {

    static getTemplate(name) {

            if (name == 'basic') {
                let data = JSON.parse(localStorage.getItem(`basic`))
                if (!data) data = {}
                return `
            <form action="" class="form" data-page='basic' data-next='social'>

                <div class="div-inputs">

                <div class="input-group">
                <label for="fullName">Full Name <span class="">*</span></label>
                <input  class="input-content" value='${data.fullName != undefined ? data.fullName : ''}' type="text" name="fullName" id="fullName"  placeholder="Foo Bar"  onmouseenter="addTextMask()" autocomplete="off">
            </div>

            <div class="input-group">
                <label for="nickname">Nickname</label>
                <input class="input-content" value='${data.nickname != undefined ? data.nickname : ''}' type="text" name="nickname" id="nickname"  placeholder="Juanito" onmouseenter="addTextMask()" autocomplete="off">
            </div>

            <div class="input-group-email">
                <label for="email">Email<span class="">*</span></label>
                <input  class="input-content" value='${data.email != undefined ? data.email : ''}' type="text" name="email" id="email"  placeholder="foo@bar.com"  autocomplete="off">
            </div>

            <div class="input-group-phone">
                <label for="phone">Phone</label>
                <input class="input-content" value='${data.phone != undefined ? data.phone : ''}' type="text" name="phone" id="phone" placeholder="(83) 0000-0000" maxlength="15" autocomplete="off">
            </div>

                </div>

                <div class="birthday">
                    <h2 class="subtitle">Birthday</h2>

                    <div class="date-group">

                        <div class="input-group">
                            <label for="day">Day</label>
                            <select name="day" id="day">
                            <option selected disabled>Select the day</option>
                            ${(()=>{
                                let options = ``
                                for (let index = 1; index <= 31; index++) {
                                    options += `<option ${data.day == index ? 'selected' : ''} value="${index}">${index}</option>`
                                    
                                }
                                return options
                            })()
                            }
                            </select>
                        </div>

                        <div class="input-group">
                            <label for="month">Month</label>
                            <select name="month" id="month">
                            <option selected disabled>Select the month</option>
                            ${(()=>{
                                let options = ``
                                for (let index = 1; index <= 12; index++) {
                                    options += `<option ${data.month == index ? 'selected' : ''} value="${index}">${index}</option>`
                                    
                                }
                                return options
                            })()
                            }
                            </select>
                        </div>
                        <div class="input-group">
                            <label for="year">Year</label>
                            <select name="year" id="year" focusout="CalculateAge()" >
                                <option selected disabled>Select the year</option>
                                ${(()=>{
                                    let options = ``
                                    for (let index = 2022; index >= 1900; index--) {
                                        options += `<option ${data.year == index ? 'selected' : ''} value="${index}">${index}</option>`
                                        
                                    }
                                    return options
                                })()
                                }
                            </select>
                        </div>
                        <div class="input-group">
                            <label for="age">Age</label>
                            <input type="text" placeholder="18" id="age" disabled>
                        </div>
                    </div>
                </div>
                
                <div class="label-div terms-group">
                <label><input type="checkbox" ${data.terms ? 'checked': ''} class='checkbox' value="agree" name="terms" id="terms" > I accept the terms and privacy</label>
                <label class='checkbox-error invisible'>Please, check the box above to agree with our terms</label>
                </div>

                <footer class="first-footer">
                    <button value="Next" class="submit-form-button">Next<i class="fa-solid fa-angle-right"></i></button>
                </footer>
            </form>
        `
        } else if (name == 'social') {
            let data = JSON.parse(localStorage.getItem(`social`))
            if (!data) data = {}
            return `
            <form action="" class="form" data-page='social' data-next='certificates'>

                <div class="div-inputs">
                    <div class="input-group">
                        <label for="linkedin">Linkedin<span ></span></label>
                        <input class="input-content" value='${data.linkedin != undefined ? data.linkedin : ''}' type="text" name="linkedin" id="linkedin"  placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" autocomplete="off">
                        <label class='invalid-link invisible'>Please insert a valid link</label>
                    </div>

                    <div class="input-group">
                        <label for="Github">Github<span class="">*</span></label>
                        <input class="input-content" value='${data.github != undefined ? data.github : ''}' type="text" name="github" id="github"  placeholder="https://github.com/foobar"  autocomplete="off">
                        <label class='invalid-link invisible'>Please insert a valid link</label>

                    </div>

                    <div class="alignment-space"></div>
                </div>
                

                <footer class="second-footer">
                    <button value="Next" class="submit-form-button" >Next<i class="fa-solid fa-angle-right"></i></button>
                </footer>
            </form>
            `
        } else if (name == 'certificates') {
            let data = JSON.parse(localStorage.getItem(`certificates`)) || {}
            if (!data.hasOwnProperty('certificates')) {
                data = {
                    certificates: [],
                    favorites: []
                }
                localStorage.setItem('certificates', JSON.stringify(data))
            }
            return `
            <form action="" data-page='certificates' data-next='report' class="form">

                <div class="div-certificates">
                    <div class="input-link-certificate">
                        <label for="certificate">Certificates</label>
                        <div id='certificateList'>
                                <div class='certificate-item'>
                                    <div class='certificate-input'>
                                        <input class="input-content certificate" data-id='0' value='${data.certificates[0] != undefined ? data.certificates[0] : ''}' type="text" name="certificate0" id="certificate0"  placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/">
                                        <img src='${data.favorites[0] == 'true' ? "images/favorite-filled.png" : "images/favorite.png"}' data-id='0' data-favorite='${data.favorites[0] == "true" ? "true" : "false"}' class='favorite' />
                                    </div>
                                    <div class='certificate-actions'>
                                        <img src='images/edit.png' class='action-btn edit'/>
                                        <img src='images/trash.png' class='action-btn trash'/>
                                    </div>
                                </div>
                                ${
                                    //copia o array e inverte para mostrar do primeiro ao ultimo
                                    (()=>{
                                        return data.certificates.map((e, i) => {
                                            if (i==0) return
                                            return this.getCertificateTemplate(i, e)
                                        }).join('')
                                    })()
                                }
                        </div>
                    </div>
                    <div class="add-button-div">
                        <button class="add-button" id='addCertificate'><i class="fa-solid fa-plus"></i> More <i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>

                <div class="div-inputs">

                    <div class="input-group">
                        <label for="teamName">Team Name <span class="">*</span></label>
                    
                        <input class="input-content" type="text" value='${data.teamName != undefined ? data.teamName : ''}' name="teamName" id="teamName"  placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"  onclick=" toggleFinishButton()" autocomplete="off">


                    </div>

                    <div class="input-group">
                        <label for="institution">Institution <span class="">*</span></label>

                        <input class="input-content" type="text" value='${data.institution != undefined ? data.institution : ''}' name="institution" id="institution"  placeholder="Universidade Federal da Paraíba"  onclick=" toggleFinishButton()" autocomplete="off">

                    </div>

                    <div class="input-group">
                        <label for="graduation">Graduation <span class="">*</span></label>
                        <input class="input-content" type="text" value='${data.graduation != undefined ? data.graduation : ''}' name="graduation" id="graduation"  placeholder="Ciências da Computação"  onclick=" toggleFinishButton()" autocomplete="off">


                    </div>

                </div>

                <footer class="third-footer">
                    <button value="Next" class="finish-form-button" onclick="toggleFinishButton(), starModalOnClick()" id="finishButton"><i class="fa-solid fa-check"></i>Finish</button>
                </footer>
            </form>

            <div class="modal-container" id="confirmation-modal">
                <div class="modal">
                    <div class="modal-close-button">
                        <button class="close-button">X</button>
                    </div>
                    <div class="modal-texts">
                        <h1>Congratulations!</h1>
                        <h3>Your informations have been correctly saved!</h3>                
                    </div>
        
                    <div class="modal-image-confirmation">
                        <img src="./images/confirmation-image.png" >
                    </div>
                </div>
            </div>
            `
        }
    }

    static getCertificateTemplate(id, value = '') {
        let data = JSON.parse(localStorage.getItem(`certificates`))

        return `
        <div class='certificate-item'>
            <div class='certificate-input'>
                <input class="input-content certificate" data-id='${id}' value='${value}' type="text" name="certificate${id}" id="certificate${id}"  placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/">            
                <img src='${data.favorites[id] == 'true' ? "images/favorite-filled.png" : "images/favorite.png"}' data-id='${id}' data-favorite='${data.favorites[id] == "true" ? "true" : "false"}' class='favorite' />
            </div>
            <div class='certificate-actions'>
                <img src='images/edit.png' class='action-btn edit'/>
                <img src='images/trash.png' class='action-btn trash'/>
            </div>
        </div>
        `
    }
}