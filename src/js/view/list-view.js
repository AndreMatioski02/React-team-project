class ListView{
    static list(){
        let basic = JSON.parse(localStorage.getItem(`basic`));
        let social = JSON.parse(localStorage.getItem(`social`));
        let certificates = JSON.parse(localStorage.getItem(`certificates`));

        if (!basic) {
            document.querySelector('.content').innerHTML = '<h2>No data registered!.</h2>'
        }else{
            return `
            <div class="list-div">
                <h1 class="title">Full Name: ${basic.fullName}</h1>
                <h3 class="subtitle-list">Nickname: ${basic.nickname}</h3>
                <h3 class="subtitle-list">Email: ${basic.email}</h3>
                <h3 class="subtitle-list">Phone: ${basic.phone}</h3>
                <h3 class="subtitle-list">Date: ${basic.day}/${basic.month}/${basic.year}</h3>       
    
                <h3 class="subtitle-list">Github: ${social.github}</h3>
                <h3 class="subtitle-list">Linkedin: ${social.linkedin}</h3>
    
                <h3 class="subtitle-list">Certificates: ${certificates.certificate1}</h3>
                <h3 class="subtitle-list">Certificates: ${certificates.certificate2}</h3>
                <h3 class="subtitle-list">Certificates: ${certificates.certificate3}</h3>
                <h3 class="subtitle-list">Certificates: ${certificates.certificate4}</h3>
                <h3 class="subtitle-list">Certificates: ${certificates.certificate5}</h3>
                <h3 class="subtitle-list">Graduation: ${certificates.graduation}</h3>
                <h3 class="subtitle-list">Institution: ${certificates.institution}</h3>
                <h3 class="subtitle-list">Team Name: ${certificates.teamName}</h3>       
            </div>
            <div class="list-div">
                <h1 class="title">Full Name: ${basic.fullName}</h1>
                <h3 class="subtitle-list">Nickname: ${basic.nickname}</h3>
                <h3 class="subtitle-list">Email: ${basic.email}</h3>
                <h3 class="subtitle-list">Phone: ${basic.phone}</h3>
                <h3 class="subtitle-list">Date: ${basic.day}/${basic.month}/${basic.year}</h3>       
    
                <h3 class="subtitle-list">Github: ${social.github}</h3>
                <h3 class="subtitle-list">Linkedin: ${social.linkedin}</h3>
    
                <h3 class="subtitle-list">Certificates: ${certificates.certificate1}</h3>
                <h3 class="subtitle-list">Certificates: ${certificates.certificate2}</h3>
                <h3 class="subtitle-list">Certificates: ${certificates.certificate3}</h3>
                <h3 class="subtitle-list">Certificates: ${certificates.certificate4}</h3>
                <h3 class="subtitle-list">Certificates: ${certificates.certificate5}</h3>
                <h3 class="subtitle-list">Graduation: ${certificates.graduation}</h3>
                <h3 class="subtitle-list">Institution: ${certificates.institution}</h3>
                <h3 class="subtitle-list">Team Name: ${certificates.teamName}</h3>       
            </div>
            <div class="list-div">
                <h1 class="title">Full Name: ${basic.fullName}</h1>
                <h3 class="subtitle-list">Nickname: ${basic.nickname}</h3>
                <h3 class="subtitle-list">Email: ${basic.email}</h3>
                <h3 class="subtitle-list">Phone: ${basic.phone}</h3>
                <h3 class="subtitle-list">Date: ${basic.day}/${basic.month}/${basic.year}</h3>       
    
                <h3 class="subtitle-list">Github: ${social.github}</h3>
                <h3 class="subtitle-list">Linkedin: ${social.linkedin}</h3>
    
                <h3 class="subtitle-list">Certificates: ${certificates.certificate1}</h3>
                <h3 class="subtitle-list">Certificates: ${certificates.certificate2}</h3>
                <h3 class="subtitle-list">Certificates: ${certificates.certificate3}</h3>
                <h3 class="subtitle-list">Certificates: ${certificates.certificate4}</h3>
                <h3 class="subtitle-list">Certificates: ${certificates.certificate5}</h3>
                <h3 class="subtitle-list">Graduation: ${certificates.graduation}</h3>
                <h3 class="subtitle-list">Institution: ${certificates.institution}</h3>
                <h3 class="subtitle-list">Team Name: ${certificates.teamName}</h3>       
            </div>
            <div class="list-div">
            <h1 class="title">Full Name: ${basic.fullName}</h1>
            <h3 class="subtitle-list">Nickname: ${basic.nickname}</h3>
            <h3 class="subtitle-list">Email: ${basic.email}</h3>
            <h3 class="subtitle-list">Phone: ${basic.phone}</h3>
            <h3 class="subtitle-list">Date: ${basic.day}/${basic.month}/${basic.year}</h3>       

            <h3 class="subtitle-list">Github: ${social.github}</h3>
            <h3 class="subtitle-list">Linkedin: ${social.linkedin}</h3>

            <h3 class="subtitle-list">Certificates: ${certificates.certificate1}</h3>
            <h3 class="subtitle-list">Certificates: ${certificates.certificate2}</h3>
            <h3 class="subtitle-list">Certificates: ${certificates.certificate3}</h3>
            <h3 class="subtitle-list">Certificates: ${certificates.certificate4}</h3>
            <h3 class="subtitle-list">Certificates: ${certificates.certificate5}</h3>
            <h3 class="subtitle-list">Graduation: ${certificates.graduation}</h3>
            <h3 class="subtitle-list">Institution: ${certificates.institution}</h3>
            <h3 class="subtitle-list">Team Name: ${certificates.teamName}</h3>       
        </div>
        <div class="list-div">
            <h1 class="title">Full Name: ${basic.fullName}</h1>
            <h3 class="subtitle-list">Nickname: ${basic.nickname}</h3>
            <h3 class="subtitle-list">Email: ${basic.email}</h3>
            <h3 class="subtitle-list">Phone: ${basic.phone}</h3>
            <h3 class="subtitle-list">Date: ${basic.day}/${basic.month}/${basic.year}</h3>       

            <h3 class="subtitle-list">Github: ${social.github}</h3>
            <h3 class="subtitle-list">Linkedin: ${social.linkedin}</h3>

            <h3 class="subtitle-list">Certificates: ${certificates.certificate1}</h3>
            <h3 class="subtitle-list">Certificates: ${certificates.certificate2}</h3>
            <h3 class="subtitle-list">Certificates: ${certificates.certificate3}</h3>
            <h3 class="subtitle-list">Certificates: ${certificates.certificate4}</h3>
            <h3 class="subtitle-list">Certificates: ${certificates.certificate5}</h3>
            <h3 class="subtitle-list">Graduation: ${certificates.graduation}</h3>
            <h3 class="subtitle-list">Institution: ${certificates.institution}</h3>
            <h3 class="subtitle-list">Team Name: ${certificates.teamName}</h3>       
        </div>
            
            `  
        }
    }
}