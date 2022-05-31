class TemplateManager {

    static getTemplate(name) {
        if (name == 'basic') return `
            <form action="" class="form">

                <div class="input-group">
                    <label for="fullName">Full Name <span class="required">*</span></label>
                    <input type="text" name="name" id="fullName">
                </div>
                <div class="input-group">
                    <label for="fullName">Nickname</label>
                    <input type="text" name="name" id="fullName">
                </div>
                <div class="input-group">
                    <label for="fullName">Email<span class="required">*</span></label>
                    <input type="text" name="name" id="fullName">
                </div>
                <div class="input-group">
                    <label for="fullName">Phone</label>
                    <input type="text" name="name" id="fullName">
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
                            <select name="year" id="year">
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
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
                    </div>
                </div>
            </form>
        `
        else if (name == 'social') return 'social'
        else if (name == 'certificates') return 'certificates'
    }
}