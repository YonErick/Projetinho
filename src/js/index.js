
    const buttonTrailer = document.querySelector(".button-trailer");
    const video = document.getElementById("video");
    const modal = document.querySelector(".modal");
    const linkDoVideo = video.src;

    function alternarModal(){
        modal.classList.toggle("aberto")
    };

    buttonTrailer.addEventListener("click", () => {
        
        alternarModal();
        video.setAttribute("src", linkDoVideo)
    })
    
    const buttonEndModal = document.querySelector(".end-modal");

    buttonEndModal.addEventListener("click", () => {
        alternarModal();
        video.setAttribute("src", "")
    });

    