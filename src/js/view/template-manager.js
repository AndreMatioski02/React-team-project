class TemplateManager {

    static getTemplate(name) {
        if (name == 'basic') {
            let data = JSON.parse(localStorage.getItem(`basic`))
            if (!data) data = {}
            return `
            <form action="" data-page='social' class="form">

                <div class="input-group">
                    <label for="fullName">Full Name <span class="required">*</span></label>
                    <input type="text" value='${data.fullName != undefined ? data.fullName : ''}' name="fullName" id="fullName">
                </div>
                <div class="input-group">
                    <label for="nickname">Nickname</label>
                    <input type="text" value='${data.nickname != undefined ? data.nickname : ''}' name="nickname" id="nickname">
                </div>
                <div class="input-group">
                    <label for="email">Email<span class="required">*</span></label>
                    <input type="text" value='${data.email != undefined ? data.email : ''}' name="email" id="email">
                </div>
                <div class="input-group">
                    <label for="phone">Phone</label>
                    <input type="text" value='${data.phone != undefined ? data.phone : ''}' name="phone" id="phone">
                </div>

                <div class="birthday">
                    <h2 class="subtitle">Birthday</h2>
                    <div class="date-group">

                        <div class="input-group">
                            <label for="day">Day</label>
                            <select name="day" id="day">
                            <option ${data.day == 1 ? 'selected' : ''} value="1">1</option>
                            <option ${data.day == 2 ? 'selected' : ''} value="2">2</option>
                            <option ${data.day == 3 ? 'selected' : ''} value="3">3</option>
                            <option ${data.day == 4 ? 'selected' : ''} value="4">4</option>
                            <option ${data.day == 5 ? 'selected' : ''} value="5">5</option>
                            <option ${data.day == 6 ? 'selected' : ''} value="6">6</option>
                            <option ${data.day == 7 ? 'selected' : ''} value="7">7</option>
                            <option ${data.day == 8 ? 'selected' : ''} value="8">8</option>
                            <option ${data.day == 9 ? 'selected' : ''} value="9">9</option>
                            <option ${data.day == 10 ? 'selected' : ''} value="10">10</option>
                            <option ${data.day == 11 ? 'selected' : ''} value="11">11</option>
                            <option ${data.day == 12 ? 'selected' : ''} value="12">12</option>
                            <option ${data.day == 13 ? 'selected' : ''} value="13">13</option>
                            <option ${data.day == 14 ? 'selected' : ''} value="14">14</option>
                            <option ${data.day == 15 ? 'selected' : ''} value="15">15</option>
                            <option ${data.day == 16 ? 'selected' : ''} value="16">16</option>
                            <option ${data.day == 17 ? 'selected' : ''} value="17">17</option>
                            <option ${data.day == 18 ? 'selected' : ''} value="18">18</option>
                            <option ${data.day == 19 ? 'selected' : ''} value="19">19</option>
                            <option ${data.day == 20 ? 'selected' : ''} value="20">20</option>
                            <option ${data.day == 21 ? 'selected' : ''} value="21">21</option>
                            <option ${data.day == 22 ? 'selected' : ''} value="22">22</option>
                            <option ${data.day == 23 ? 'selected' : ''} value="23">23</option>
                            <option ${data.day == 24 ? 'selected' : ''} value="24">24</option>
                            <option ${data.day == 25 ? 'selected' : ''} value="25">25</option>
                            <option ${data.day == 26 ? 'selected' : ''} value="26">26</option>
                            <option ${data.day == 27 ? 'selected' : ''} value="27">27</option>
                            <option ${data.day == 28 ? 'selected' : ''} value="28">28</option>
                            <option ${data.day == 29 ? 'selected' : ''} value="29">29</option>
                            <option ${data.day == 30 ? 'selected' : ''} value="30">30</option>
                            <option ${data.day == 31 ? 'selected' : ''} value="31">31</option>
                        </select>
                        </div>

                        <div class="input-group">
                            <label for="month">Month</label>
                            <select name="month" id="month">
                                <option ${data.month == 1 ? 'selected' : ''} value="1">1</option>
                                <option ${data.month == 2 ? 'selected' : ''} value="2">2</option>
                                <option ${data.month == 3 ? 'selected' : ''} value="3">3</option>
                                <option ${data.month == 4 ? 'selected' : ''} value="4">4</option>
                                <option ${data.month == 5 ? 'selected' : ''} value="5">5</option>
                                <option ${data.month == 6 ? 'selected' : ''} value="6">6</option>
                                <option ${data.month == 7 ? 'selected' : ''} value="7">7</option>
                                <option ${data.month == 8 ? 'selected' : ''} value="8">8</option>
                                <option ${data.month == 9 ? 'selected' : ''} value="9">9</option>
                                <option ${data.month == 10 ? 'selected' : ''} value="10">10</option>
                                <option ${data.month == 11 ? 'selected' : ''} value="11">11</option>
                                <option ${data.month == 12 ? 'selected' : ''} value="12">12</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label for="year">Year</label>
                            <select name="year" id="year">
                                <option ${data.year == 1991 ? 'selected' : ''} value="1991">1991</option>
                                <option ${data.year == 1992 ? 'selected' : ''} value="1992">1992</option>
                                <option ${data.year == 1993 ? 'selected' : ''} value="1993">1993</option>
                                <option ${data.year == 1994 ? 'selected' : ''} value="1994">1994</option>
                                <option ${data.year == 1995 ? 'selected' : ''} value="1995">1995</option>
                                <option ${data.year == 1996 ? 'selected' : ''} value="1996">1996</option>
                                <option ${data.year == 1997 ? 'selected' : ''} value="1997">1997</option>
                                <option ${data.year == 1998 ? 'selected' : ''} value="1998">1998</option>
                                <option ${data.year == 1999 ? 'selected' : ''} value="1999">1999</option>
                                <option ${data.year == 2000 ? 'selected' : ''} value="2000">2000</option>
                                <option ${data.year == 2001 ? 'selected' : ''} value="2001">2001</option>
                                <option ${data.year == 2002 ? 'selected' : ''} value="2002">2002</option>
                                <option ${data.year == 2003 ? 'selected' : ''} value="2003">2003</option>
                                <option ${data.year == 2004 ? 'selected' : ''} value="2004">2004</option>
                                <option ${data.year == 2005 ? 'selected' : ''} value="2005">2005</option>
                                <option ${data.year == 2006 ? 'selected' : ''} value="2006">2006</option>
                                <option ${data.year == 2007 ? 'selected' : ''} value="2007">2007</option>
                                <option ${data.year == 2008 ? 'selected' : ''} value="2008">2008</option>
                                <option ${data.year == 2009 ? 'selected' : ''} value="2009">2009</option>
                                <option ${data.year == 2010 ? 'selected' : ''} value="2010">2010</option>
                                <option ${data.year == 2011 ? 'selected' : ''} value="2011">2011</option>
                                <option ${data.year == 2012 ? 'selected' : ''} value="2012">2012</option>
                            </select>
                        </div>
                    </div>
                </div>

                <label><input type="checkbox" value="agree" name="terms" id="terms"> I accept the terms and privacy</label>

                <button value="Next" id="submit-form">Submit</button>
            </form>
            `
        } else if (name == 'social') return 'social'
        else if (name == 'certificates') return 'certificates'
    }
}