class ListView {
    static list() {
            let data = JSON.parse(localStorage.getItem(`users`));
            const div = document.querySelector('.content');
            const card = document.createElement("div");
            const certi = document.createElement('div');

            card.style.display = 'flex';

            data.forEach(item => {
                        card.innerHTML = card.innerHTML + `
                <div class="list-div">
                    <h1 class="title-card">${item.fullName}</h1>     
                    <h3 class="subtitle-list">Nickname: ${item.nickname}</h3>
                    <h3 class="subtitle-list">Email: ${item.email}</h3>
                    <h3 class="subtitle-list">Phone:${item.phone}}</h3>
                    <h3 class="subtitle-list">Date: ${item.day}/${item.month}/${item.year}</h3><br>       
                    
                    <h3 class="subtitle-list">Github: ${item.github}</h3>
                    <h3 class="subtitle-list">Linkedin: ${item.linkedin}</h3><br>
                        ${
                            item.certificates.map((certificate, index)=>{
                            // console.log(certificate);
                            //certi.innerHTML =certi.innerHTML+`<h3 class="subtitle-list">Certificates:${certificate}</h3>`;
                            if(item.favorites[index] == 'true')
                                return `<h3 class="subtitle-list">Certificates:${certificate}</h3>`;
                            }).join(``)
                        }
                        ${
                            item.certificates.map((certificate, index)=>{
                            // console.log(certificate);
                            //certi.innerHTML =certi.innerHTML+`<h3 class="subtitle-list">Certificates:${certificate}</h3>`;
                            if(item.favorites[index] == 'false' || item.favorites[index] == null)
                                return `<h3 class="subtitle-list">Certificates: ${certificate}</h3>`;
                            }).join(``)
                        }

                </div>`;
        });
        div.append(card);
    }  
};

ListView.list();