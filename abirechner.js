window.addEventListener("input", function(event) {
    var LKSumme = 0;
    var GKSumme = 0;
    var GKextraSumme = 0;
    var pruefungenSumme = 0;
    var summeGesamt = 0;
    
    berechneFach();
    LKSumme = berechneLK();
    GKSumme = berechneGK();
    GKextraSumme = berechneweitereGK();
    pruefungenSumme = berechnePruefungen();
    summeGesamt = berechneSumme(LKSumme, GKSumme, GKextraSumme, pruefungenSumme);
    gesamtNote = berechneNote(summeGesamt);
});

function berechneFach() {
    var notenFach = document.getElementsByClassName("Note");
    var ergebnis = document.getElementById("Ergebnis");

    var summe = 0;
    var anzahl = 0;
    var schnitt = 0.0;

    for(var i=0; i<notenFach.length;i++) {
        if(notenFach[i].value != "") {
            summe += parseInt(notenFach[i].value);
            anzahl++;
        }
    }

    schnitt = summe / anzahl;

    if(isNaN(schnitt) == false) {
        ergebnis.value = schnitt;
    }
    else {
        ergebnis.value = "";
    }
}

function berechneLK() {
    var notenLK = document.getElementsByClassName("LKNote");
    var summe = 0;
    
    for(var i=0; i<notenLK.length; i++) {
        if(notenLK[i].value != "") {
            summe+=parseInt(notenLK[i].value);
        }
    }

    summe*=2;

    return summe;
}

function berechneGK() {
    var notenGK = document.getElementsByClassName("GKNote");
    var summe = 0;
    
    for(var i=0; i<notenGK.length; i++) {
        if(notenGK[i].value != "") {
            summe+=parseInt(notenGK[i].value);
        }
    }

    return summe;
}

function berechneweitereGK() {
    var notenGKe = document.getElementsByClassName("GKextraNote");
    var summe = 0;
    
    for(var i=0; i<notenGKe.length; i++) {
        if(notenGKe[i].value != "") {
            summe+=parseInt(notenGKe[i].value);
        }
    }

    return summe;
}

function berechnePruefungen() {
    var notenP = document.getElementsByClassName("Pruefung");
    var summe = 0;
    
    for(var i=0; i<notenP.length; i++) {
        if(notenP[i].value != "") {
            summe+=parseInt(notenP[i].value);
        }
    }

    summe*=4;

    return summe;
}

function berechneSumme(LKSumme, GKSumme, GKextraSumme, pruefungenSumme) {
    var summe = 0;

    summe += LKSumme;
    summe += GKSumme;
    summe += GKextraSumme;
    summe += pruefungenSumme;

    summeLeistungskurs = document.getElementById("SummeLeistungskurse");
    summeLeistungskurs.value = LKSumme;

    summeGrundkurs = document.getElementById("SummeGrundkurs");
    summeGrundkurs.value = GKSumme;

    summeGrundkursExtra = document.getElementById("SummeWeitereGrundkurse");
    summeGrundkursExtra.value = GKextraSumme;

    summeAbibereich = document.getElementById("SummeAbibereich");
    summeAbibereich.value = pruefungenSumme;

    summeGesamt = document.getElementById("Gesamtpunktzahl");
    summeGesamt.value = summe;

    return summe;
}

function berechneNote(summeGesamt) {
    summe = summeGesamt;
    note = 0;
    summeNote = document.getElementById("Gesamtnote");

    if(summe > 822) {
        note = 1.0;
        summeNote.value = "1.0";
        return note;
    }

    if(summe > 804) {
        note = 1.1;
        summeNote.value = note;
        return note;
    } else if(summe > 786) {
        note = 1.2;
        summeNote.value = note;
        return note;
    } else if(summe > 768) {
        note = 1.3;
        summeNote.value = note;
        return note;
    } else if(summe > 750) {
        note = 1.4;
        summeNote.value = note;
        return note;
    } else if(summe > 732) {
        note = 1.5;
        summeNote.value = note;
        return note;
    } else if(summe > 714) {
        note = 1.6;
        summeNote.value = note;
        return note;
    } else if(summe > 696) {
        note = 1.7;
        summeNote.value = note;
        return note;
    } else if(summe > 678) {
        note = 1.8;
        summeNote.value = note;
        return note;
    } else if(summe > 660) {
        note = 1.9;
        summeNote.value = note;
        return note;
    } else if(summe > 642) {
        note = 2.0;
        summeNote.value = "2.0";
        return note;
    } else if(summe > 624) {
        note = 2.1;
        summeNote.value = note;
        return note;
    } else if(summe > 606) {
        note = 2.2;
        summeNote.value = note;
        return note;
    } else if(summe > 588) {
        note = 2.3;
        summeNote.value = note;
        return note;
    } else if(summe > 570) {
        note = 2.4;
        summeNote.value = note;
        return note;
    } else if(summe > 552) {
        note = 2.5;
        summeNote.value = note;
        return note;
    } else if(summe > 534) {
        note = 2.6;
        summeNote.value = note;
        return note;
    } else if(summe > 516) {
        note = 2.7;
        summeNote.value = note;
        return note;
    } else if(summe > 498) {
        note = 2.8;
        summeNote.value = note;
        return note;
    } else if(summe > 480) {
        note = 2.9;
        summeNote.value = note;
        return note;
    } else if(summe > 462) {
        note = 3.0;
        summeNote.value = "3.0";
        return note;
    } else if(summe > 444) {
        note = 3.1;
        summeNote.value = note;
        return note;
    } else if(summe > 426) {
        note = 3.2;
        summeNote.value = note;
        return note;
    } else if(summe > 408) {
        note = 3.3;
        summeNote.value = note;
        return note;
    } else if(summe > 390) {
        note = 3.4;
        summeNote.value = note;
        return note;
    } else if(summe > 372) {
        note = 3.5;
        summeNote.value = note;
        return note;
    } else if(summe > 354) {
        note = 3.6;
        summeNote.value = note;
        return note;
    } else if(summe > 336) {
        note = 3.7;
        summeNote.value = note;
        return note;
    } else if(summe > 318) {
        note = 3.8;
        summeNote.value = note;
        return note;
    } else if(summe > 300) {
        note = 3.9;
        summeNote.value = note;
        return note;
    } else if(summe > 299) {
        note = 4.0;
        summeNote.value = "4.0";
        return note;
    } else {
        note = 4.1;
        summeNote.value = "nicht bestanden";
        return note;
    }

    
}