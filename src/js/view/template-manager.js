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
                <input class="input-content" value='${data.fullName != undefined ? data.fullName : ''}' type="text" name="fullName" id="fullName"  placeholder="Foo Bar" required>
            </div>

            <div class="input-group">
                <label for="nickname">Nickname</label>
                <input class="input-content" value='${data.nickname != undefined ? data.nickname : ''}' type="text" name="nickname" id="nickname"  placeholder="Juanito">
            </div>

            <div class="input-group-email">
                <label for="email">Email<span class="required">*</span></label>
                <input class="input-content" value='${data.email != undefined ? data.email : ''}' type="text" name="email" id="email"  placeholder="foo@bar.com" required>
            </div>

            <div class="input-group-phone">
                <label for="phone">Phone</label>
                <input class="input-content" value='${data.phone != undefined ? data.phone : ''}' type="text" name="phone" id="phone" placeholder="(83) 0000-0000">
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
                    <button value="Next" class="submit-form-button">Next<i class="fa-solid fa-angle-right"></i></button>
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
            return `
            <form action="" class="form">

                <div class="div-certificates">
                    <div class="input-link-certificate">
                        <label for="certificate">Certificates</label>
                        <div id='certificateList'>
                            <input class="input-content certificate" type="text" name="certificate1" id="certificate1"  placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/">            
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
                    <button value="Next" class="finish-form-button"><i class="fa-solid fa-check"></i>Finish</button>
                </footer>
            </form>
            `
        }
    }

    static getCertificateTemplate(id) {
        return `
        <div class="input-link-certificate">
            <input class="input-content certificate" type="text" name="certificate${id}" id="certificate${id}"  placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/">            
        </div>
        `
    }
}