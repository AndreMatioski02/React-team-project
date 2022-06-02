class TemplateManager {

    static getTemplate(name) {

        if (name == 'basic') {
            let data = JSON.parse(localStorage.getItem(`basic`))
            if (!data) data = {}
            return `
            <form action="" class="form" data-page='social'>

                <div class="div-inputs">

                <div class="input-group">
                <label for="fullName">Full Name <span class="required">*</span></label>
                <input class="input-content" value='${data.fullName != undefined ? data.fullName : ''}' type="text" name="fullName" id="fullName"  placeholder="Foo Bar" required onmouseenter="addTextMask()">
            </div>

            <div class="input-group">
                <label for="nickname">Nickname</label>
                <input class="input-content" value='${data.nickname != undefined ? data.nickname : ''}' type="text" name="nickname" id="nickname"  placeholder="Juanito" onmouseenter="addTextMask()">
            </div>

            <div class="input-group-email">
                <label for="email">Email<span class="required">*</span></label>
                <input class="input-content" value='${data.email != undefined ? data.email : ''}' type="text" name="email" id="email"  placeholder="foo@bar.com" required>
            </div>

            <div class="input-group-phone">
                <label for="phone">Phone</label>
                <input class="input-content" value='${data.phone != undefined ? data.phone : ''}' type="text" name="phone" id="phone" placeholder="(83) 0000-0000" maxlength="15" onmouseenter="addPhoneMask()">
            </div>

                </div>

                <div class="birthday">
                    <h2 class="subtitle">Birthday</h2>

                    <div class="date-group">

                        <div class="input-group">
                            <label for="day">Day</label>
                            <select name="day" id="day">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        </div>

                        <div class="input-group">
                            <label for="month">Month</label>
                            <select name="month" id="month">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label for="year">Year</label>
                            <select name="year" id="year" onclick="StartYears()" focusout="CalculateAge()" >
                                <option value="1991" onclick="CalculaAge()">1991</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label for="age">Age</label>
                            <input type="text" placeholder="18">
                        </div>
                    </div>
                </div>
                
                <div class="label-div">
                    <label><input type="checkbox" value="agree" name="terms" id="terms"> I accept the terms and privacy</label>
                </div>

                <footer class="first-footer">
                    <button value="Next" class="submit-form-button"">Next<i class="fa-solid fa-angle-right"></i></button>
                </footer>
            </form>
        `
        } else if (name == 'social') {
            let data = JSON.parse(localStorage.getItem(`social`))
            if (!data) data = {}
            return `
            <form action="" class="form" data-page='certificates'>

                <div class="div-inputs">
                    <div class="input-group">
                        <label for="linkedin">Linkedin<span ></span></label>
                        <input class="input-content" value='${data.linkedin != undefined ? data.linkedin : ''}' type="text" name="linkedin" id="linkedin"  placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/">
                    </div>

                    <div class="input-group">
                        <label for="Github">Github<span class="required">*</span></label>
                        <input class="input-content" value='${data.github != undefined ? data.github : ''}' type="text" name="github" id="github"  placeholder="https://github.com/foobar" required>
                    </div>

                    <div class="alignment-space"></div>
                </div>
                

                <footer class="second-footer">
                    <button value="Next" class="submit-form-button">Next<i class="fa-solid fa-angle-right"></i></button>
                </footer>
            </form>
            `
        } else if (name == 'certificates') {
            let data = JSON.parse(localStorage.getItem(`certificates`))
            if (!data) {
                data = {
                    certificates: [],
                    favorites: []
                }
                localStorage.setItem('certificates', JSON.stringify(data))
            }
            return `
            <form action="" data-page='basic' class="form">

                <div class="div-certificates">
                    <div class="input-link-certificate">
                        <label for="certificate">Certificates</label>
                        <div id='certificateList'>
                        ${
                            //copia o array e inverte para mostrar do primeiro ao ultimo
                            (()=>{
                                return data.certificates.slice(0).reverse().map((e, i) => {
                                    if (i == data.certificates.length - 1) return
                                    return this.getCertificateTemplate(data.certificates.length - i - 1, e)
                                }).join('')
                            })()
                        }
                
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
                        </div>
                    </div>
                    <div class="add-button-div">
                        <button class="add-button" id='addCertificate'><i class="fa-solid fa-plus"></i> More <i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>

                <div class="div-inputs">

                    <div class="input-group">
                        <label for="teamName">Team Name <span class="required">*</span></label>
                        <input class="input-content" type="text" name="teamName" id="teamName"  placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" required>
                    </div>

                    <div class="input-group">
                        <label for="institution">Institution <span class="required">*</span></label>
                        <input class="input-content" type="text" name="institution" id="institution"  placeholder="Universidade Federal da Paraíba" required>
                    </div>

                    <div class="input-group">
                        <label for="graduation">Graduation <span class="required">*</span></label>
                        <input class="input-content" type="text" name="graduation" id="graduation"  placeholder="Ciências da Computação" required>
                    </div>

                </div>

                <footer class="third-footer">
                    <button value="Next" class="finish-form-button" onmouseenter="starModalOnClick()"><i class="fa-solid fa-check"></i>Finish</button>
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