function aboutMe(seccionEx){
    $(".aboutMe").hide()
    if (seccionEx == "Experience"){
        $("#rowExperience").show()
    }
    else if (seccionEx == "Education"){
        $("#rowEducation").show()
    }
    else if (seccionEx == "Skills"){
        $("#rowSkills").show()
    }
    else if (seccionEx == "Languages"){
        $("#rowLanguages").show()
    }    
}
aboutMe();