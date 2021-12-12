// !!Achtung!! Bei Aktualisierungen auch die aktuelle Jahreszahl zu Beginn
// von function ber2() sowie das Datum am Ende des Dokumentes anpassen!

function setzefocus() {
  document.f2.Jahr.focus();
  document.f2.Jahr.select()
}

MonatsTage= new Array();
MonatsTage[1]= 31; MonatsTage[2]= 28; MonatsTage[3]= 31;
MonatsTage[4]= 30; MonatsTage[5]= 31; MonatsTage[6]= 30;
MonatsTage[7]= 31; MonatsTage[8]= 31; MonatsTage[9]= 30;
MonatsTage[10]= 31; MonatsTage[11]= 30; MonatsTage[12]= 31;

WochenTag= new Array(); WochenTag[0]= "So";
WochenTag[1]= "Mo"; WochenTag[2]= "Di"; WochenTag[3]= "Mi";
WochenTag[4]= "Do"; WochenTag[5]= "Fr"; WochenTag[6]= "Sa";

MonatsName= new Array();
MonatsName[1]= "Januar"; MonatsName[2]= "Februar"; MonatsName[3]= "M&auml;rz";
MonatsName[4]= "April"; MonatsName[5]= "Mai"; MonatsName[6]= "Juni";
MonatsName[7]= "Juli"; MonatsName[8]= "August"; MonatsName[9]= "September";
MonatsName[10]= "Oktober"; MonatsName[11]= "November"; MonatsName[12]= "Dezember";

jhunm= new Array(); jhunn= new Array();
jhunm[0]= 22; jhunn[0]= 2;
jhunm[1]= 22; jhunn[1]= 2;
jhunm[2]= 23; jhunn[2]= 3;
jhunm[3]= 23; jhunn[3]= 4;
jhunm[4]= 24; jhunn[4]= 5;
jhunm[5]= 24; jhunn[5]= 5;
jhunm[6]= 24; jhunn[6]= 6;
jhunm[7]= 25; jhunn[7]= 0;
jhunm[8]= 26; jhunn[8]= 1;
jhunm[9]= 25; jhunn[9]= 1;

KTFest = new Array(371);
KTGrad = new Array(371);

function LadeKT() {
  for (i=0; i<372; i++) { KTGrad[i] = 0; KTFest[i] = ""; }
KTGrad[0] =  3; KTFest[0] = "Neujahr, Oktavtag von Weihnachten, Namengebung des Herrn, HOCHFEST DER GOTTESMUTTER MARIA";
KTGrad[1] =  10; KTFest[1] = "Basilius der Gro&szlig;e (379) und Gregor von Nazianz (um 390), Bisch&ouml;fe, Kirchenlehrer";
KTGrad[2] =  12; KTFest[2] = "Heiligster Name Jesu";
KTGrad[5] =  3; KTFest[5] = "ERSCHEINUNG DES HERRN";
KTGrad[6] =  12; KTFest[6] = "Valentin, Bischof von R&auml;tien (um 475)";
KTFest[6]+= "<br>Raimund von Pe&ntilde;afort, Ordensgr&uuml;nder (1275)";
KTGrad[7] =  12; KTFest[7] = "Severin, M&ouml;nch in Norikum (482)";
KTGrad[12] =  12; KTFest[12] = "Hilarius, Bischof von Poitiers, Kirchenlehrer (um 367)";
KTGrad[16] =  10; KTFest[16] = "Antonius, M&ouml;nchsvater in &Auml;gypten (356)";
KTGrad[19] =  12; KTFest[19] = "Fabian, Papst, M&auml;rtyrer (250)";
KTFest[19]+= "<br>Sebastian, M&auml;rtyrer (288)";
KTGrad[20] =  12; KTFest[20] = "Meinrad, M&ouml;nch auf der Reichenau. Einsiedler, M&auml;rtyrer (861)";
KTFest[20]+= "<br>Agnes, Jungfrau, M&auml;rtyrin in Rom (304)";
KTGrad[21] =  12; KTFest[21] = "Vinzenz, Diakon, M&auml;rtyrer in Spanien (304)";
KTGrad[22] =  12; KTFest[22] = "Heinrich Seuse, Ordenspriester, Mystiker (1366)";
KTGrad[23] =  10; KTFest[23] = "Franz von Sales, Bischof von Genf, Ordensgr&uuml;nder, Kirchenlehrer (1622)";
KTGrad[24] =  7; KTFest[24] = "BEKEHRUNG DES APOSTELS PAULUS";
if(Ja==2009) { 
  // Paulusjahr - Dekret der Gottesdienstkongregation von 25. Januar 2008
  KTGrad[24] = 6; KTFest[24] = "BEKEHRUNG DES APOSTELS PAULUS (in <i>einer</i> Messe dieses Sonntags - Sonderregelung f&uuml;r das Paulus-Jahr 2009)";
}
KTGrad[25] =  10; KTFest[25] = "Timotheus und Titus, Bisch&ouml;fe, Apostelsch&uuml;ler";
KTGrad[26] =  12; KTFest[26] = "Angela Merici, Jungfrau, Ordensgr&uuml;nderin (1540)";
KTGrad[27] =  10; KTFest[27] = "Thomas von Aquin, Ordenspriester, Kirchenlehrer(1274)";
KTGrad[30] =  10; KTFest[30] = "Johannes Bosco, Priester, Ordensgr&uuml;nder (1888)";
KTGrad[32] =  5; KTFest[32] = "DARSTELLUNG DES HERRN";
KTGrad[33] =  12; KTFest[33] = "Ansgar, Bischof von Hamburg-Bremen, Glaubensbote in Skandinavien (865)";
KTFest[33]+= "<br>Blasius, Bischof von Sebaste in Armenien, M&auml;rtyrer (um 316)";
KTGrad[34] =  12; KTFest[34] = "Rabanus Maurus, Bischof von Mainz (856)";
KTGrad[35] =  10; KTFest[35] = "Agatha, Jungfrau, M&auml;rtyrin in Catania (um 250)";
KTGrad[36] =  10; KTFest[36] = "Paul Miki und Gef&auml;hrten, M&auml;rtyrer in Nagasaki (1597)";
KTGrad[38] =  12; KTFest[38] = "Hieronymus &Auml;miliani, Ordensgr&uuml;nder (1537)";
KTFest[38]+= "<br>Josefine Bakhita, Ordensfrau (1947)";
KTGrad[40] =  10; KTFest[40] = "Scholastika, Jungfrau (um 547)";
KTGrad[41] =  12; KTFest[41] = "Gedenktag Unserer Lieben Frau in Lourdes";
KTGrad[44] =  7; KTFest[44] = "CYRILL, M&ouml;nch (869), und METHODIUS, Bischof (885), Glaubensboten bei den Slawen, Mitpatrone Europas";
KTGrad[47] =  12; KTFest[47] = "Sieben Gr&uuml;nder des Servitenordens (14. Jh.)";
KTGrad[51] =  12; KTFest[51] = "Petrus Damiani, Bischof, Kirchenlehrer (1072)";
KTGrad[52] =  7; KTFest[52] = "KATHEDRA PETRI";
KTGrad[53] =  10; KTFest[53] = "Polykarp, Bischof von Smyrna, M&auml;rtyrer (155)";
KTGrad[54] =  7; KTFest[54] = "MATTHIAS, Apostel";
KTGrad[55] =  12; KTFest[55] = "Walburga, Abtissin von Heidenheim in Franken (779)";
KTGrad[65] =  12; KTFest[65] = "Kasimir, K&ouml;nigssohn (1484)";
KTGrad[67] =  12; KTFest[67] = "Fridolin von S&auml;ckingen. M&ouml;nch, Glaubensbote (7. Jh.)";
KTGrad[68] =  10; KTFest[68] = "Perpetua und Felizitas, M&auml;rtyrinnen in Karthago (202/203)";
KTGrad[69] =  12; KTFest[69] = "Johannes von Gott, Ordensgr&uuml;nder (1550)";
KTGrad[70] =  12; KTFest[70] = "Bruno von Querfurt, Bischof von Magdeburg, Glaubensbote bei den Preu&szlig;en, M&auml;rtyrer (1009)";
KTFest[70]+= "<br>Franziska, Witwe, Ordensgr&uuml;nderin in Rom (1440)";
KTGrad[75] =  12; KTFest[75] = "Mathilde, Gemahlin K&ouml;nig Heinrichs I. (968)";
KTGrad[76] =  12; KTFest[76] = "Klemens Maria Hofbauer, Ordenspriester (1820 in Wien)";
KTGrad[78] =  12; KTFest[78] = "Gertrud, Abtissin von Nivelles (um 655)";
KTFest[78]+= "<br>Patrick, Bischof, Glaubensbote in Irland (461)";
KTGrad[79] =  12; KTFest[79] = "Cyrill, Bischof von Jerusalem, Kirchenlehrer (386)";
// Workaround wegen Algorithmusfehler XXX TODO!
// Korrekt wäre: Das Fest wird immer auf den nächsten freien Termin verschoben,
// und zwar ggf. auch rückwärts! Ausnahme ist Verkündigung des Herrn, wenn in Karwoche
if(Ja==2008) {
KTGrad[76] =  3; KTFest[76] = "JOSEF, BR&Auml;UTIGAM DER GOTTESMUTTER MARIA";
}
else if(Ja==2035) {
KTGrad[78] =  3; KTFest[78] = "JOSEF, BR&Auml;UTIGAM DER GOTTESMUTTER MARIA";
}
else {
KTGrad[80] =  3; KTFest[80] = "JOSEF, BR&Auml;UTIGAM DER GOTTESMUTTER MARIA";
}
KTGrad[84] =  12; KTFest[84] = "Turibio von Mongrovejo, Bischof von Lima (1606)";
KTGrad[86] =  2.9; KTFest[86] = "VERK&Uuml;NDIGUNG DES HERRN";
KTGrad[87] =  12; KTFest[87] = "Liudger, Bischof von M&uuml;nster, Glaubensbote (809)";
KTGrad[94] =  12; KTFest[94] = "Franz von Paola, Einsiedler, Ordensgr&uuml;nder (1507)";
KTGrad[96] =  12; KTFest[96] = "Isidor, Bischof von Sevilla, Kirchenlehrer (636)";
KTGrad[97] =  12; KTFest[97] = "Vinzenz Ferrer, Ordenspriester, Bu&szlig;prediger (1419)";
KTGrad[99] =  10; KTFest[99] = "Johannes Baptist de la Salle, Priester, Ordensgr&uuml;nder (1719)";
KTGrad[103] =  10; KTFest[103] = "Stanislaus, Bischof von Krakau, M&auml;rtyrer (1079)";
KTGrad[105] =  12; KTFest[105] = "Martin I., Papst, M&auml;rtyrer (655)";
KTGrad[111] =  12; KTFest[111] = "Leo IX., Papst (1054)";
KTGrad[113] =  12; KTFest[113] = "Konrad von Parzham, Ordensbruder in Alt&ouml;tting (1894)";
KTFest[113]+= "<br>Anselm, Bischof von Canterbury, Kirchenlehrer (1109)";
KTGrad[115] =  12; KTFest[115] = "Adalbert, Bischof von Prag, Glaubensbote bei den Preu&szlig;en, M&auml;rtyrer (997)";
KTFest[115]+= "<br>Georg, M&auml;rtyrer in Kappadozien (4. Jh.)";
KTGrad[116] =  12; KTFest[116] = "Fidelis von Sigmaringen, Ordenspriester, M&auml;rtyrer (1622)";
KTGrad[117] =  7; KTFest[117] = "MARKUS, Evangelist";
KTGrad[119] =  12; KTFest[119] = "Petrus Kanisius, Ordenspriester, Kirchenlehrer (1597)";
KTGrad[120] =  12; KTFest[120] = "Peter Chanel, Priester, erster M&auml;rtyrer in Ozeanien (1841)";
KTFest[120]+= "<br>Ludwig Maria Grignion de Montfort, Priester (1716)";
// KTGrad[121] =  10; KTFest[121] = "Katharina von Siena, Ordensfrau, Kirchenlehrerin (1380)";
KTGrad[121] =  7; KTFest[121] = "KATHARINA VON SIENA, Ordensfrau, Kirchenlehrerin, Patronin Europas (1380)";
KTGrad[122] =  12; KTFest[122] = "Pius V., Papst (1572)";
KTGrad[124] =  12; KTFest[124] = "Josef der Arbeiter";
KTGrad[125] =  10; KTFest[125] = "Athanasius, Bischof von Alexandrien, Kirchenlehrer (373)";
KTGrad[126] =  7; KTFest[126] = "PHILIPPUS UND JAKOBUS, Apostel";
KTGrad[127] =  12; KTFest[127] = "Florian (304) und die M&auml;rtyrer von Lorch";
KTGrad[128] =  12; KTFest[128] = "Godehard, Bischof von Hildesheim (1038)";
KTGrad[135] =  12; KTFest[135] = "Nereus und Achilleus, M&auml;rtyrer (um 304)";
KTFest[135]+= "<br>Pankratius, M&auml;rtyrer (um 304)";
KTGrad[136] =  12; KTFest[136] = "Unsere Liebe Frau in Fatima";
KTGrad[139] =  12; KTFest[139] = "Johannes Nepomuk, Priester, M&auml;rtyrer (1393)";
KTGrad[141] =  12; KTFest[141] = "Johannes I., Papst, M&auml;rtyrer (526)";
KTGrad[143] =  12; KTFest[143] = "Bernhardin von Siena, Ordenspriester, Volksprediger (1444)";
KTGrad[144] =  12; KTFest[144] = "Hermann Josef, Ordenspriester, Mystiker (1241)";
KTFest[144]+= "<br>Christopherus Magallanes, Priester, und Gef&auml;hrten, M&auml;rtyrer (1927)";
KTGrad[145] =  12; KTFest[145] = "Rita von Cascia, Ordensfrau (1447)";
KTGrad[148] =  12; KTFest[148] = "Beda der Ehrw&uuml;rdige, Ordenspriester, Kirchenlehrer (735)";
KTFest[148]+= "<br>Gregor VII., Papst (1085)";
KTFest[148]+= "<br>Maria Magdalena von Pazzi, Ordensfrau (1607)";
KTGrad[149] =  10; KTFest[149] = "Philipp Neri, Priester, Gr&uuml;nder des Oratoriums (1595)";
KTGrad[150] =  12; KTFest[150] = "Augustinus, Bischof von Canterbury, Glaubensbote in England (um 605)";
KTGrad[155] =  10; KTFest[155] = "Justin, Philosoph, M&auml;rtyrer (um 165)";
KTGrad[156] =  12; KTFest[156] = "Marcellinus und Petrus, M&auml;rtyrer in Rom (303)";
KTGrad[157] =  10; KTFest[157] = "Karl Lwanga und Gef&auml;hrten, M&auml;rtyrer in Uganda (1886)";
KTGrad[159] =  7; KTFest[159] = "BONIFATIUS, Bischof, Glaubensbote in Deutschland, M&auml;rtyrer (754)";
KTGrad[160] =  12; KTFest[160] = "Norbert von Xanten, Ordensgr&uuml;nder, Bischof von Magdeburg (1134)";
KTGrad[163] =  12; KTFest[163] = "Ephr&auml;m der Syrer, Diakon, Kirchenlehrer (373)";
KTGrad[165] =  10; KTFest[165] = "Barnabas, Apostel";
KTGrad[167] =  10; KTFest[167] = "Antonius von Padua, Ordenspriester, Kirchenlehrer (1231)";
KTGrad[169] =  12; KTFest[169] = "Vitus (Veit), M&auml;rtyrer in Sizilien (um 304)";
KTGrad[170] =  12; KTFest[170] = "Benno, Bischof von Mei&szlig;en (1106)";
KTGrad[173] =  12; KTFest[173] = "Romuald, Abt, Ordensgr&uuml;nder (1027)";
KTGrad[175] =  10; KTFest[175] = "Aloisius Gonzaga, Ordensmann (1591)";
KTGrad[176] =  12; KTFest[176] = "Paulinus, Bischof von Nola (431)";
KTFest[176]+= "<br>John Fisher, Bischof von Rochester (1535), und Thomas Morus, Lordkanzler, M&auml;rtyrer (1535)";
KTGrad[178] =  3; KTFest[178] = "GEBURT JOHANNES' DES T&Auml;UFERS";
KTGrad[180] =  12; KTFest[180] = "Josef Maria Escriv&aacute; de Balaguer, Priester";
KTGrad[181] =  12; KTFest[181] = "Hemma von Gurk, Stifterin von Gurk und Admont (1045)";
KTFest[181]+= "<br>Cyrill, Bischof von Alexandrien, Kirchenlehrer (444)";
KTGrad[182] =  10; KTFest[182] = "Iren&auml;us, Bischof von Lyon, M&auml;rtyrer (um 202)";
KTGrad[183] =  3; KTFest[183] = "PETRUS UND PAULUS, Apostel";
KTGrad[184] =  12; KTFest[184] = "Otto, Bischof von Bamberg, Glaubensbote in Pommern (1139)";
KTFest[184]+= "<br>Die ersten M&auml;rtyrer der Stadt Rom";
KTGrad[187] =  7; KTFest[187] = "MARIA HEIMSUCHUNG";
KTGrad[188] =  7; KTFest[188] = "THOMAS, Apostel";
KTGrad[189] =  12; KTFest[189] = "Ulrich, Bischof von Augsburg (973)";
KTFest[189]+= "<br>Elisabeth, K&ouml;nigin von Portugal (1336)";
KTGrad[190] =  12; KTFest[190] = "Antonius Maria Zaccaria, Priester, Ordensgr&uuml;nder (1539)";
KTGrad[191] =  12; KTFest[191] = "Maria Goretti, Jungfrau, M&auml;rtyrin (1902)";
KTGrad[192] =  12; KTFest[192] = "Willibald, Bischof von Eichst&auml;tt, Glaubensbote (787)";
KTGrad[193] =  12; KTFest[193] = "Kilian, Bischof von W&uuml;rzburg, und Gef&auml;hrten, Glaubensboten, M&auml;rtyrer (um 689)";
KTGrad[194] =  12; KTFest[194] = "Augustinus Zhao Rong, Priester (1815), und Gef&auml;hrten, M&auml;rtyrer in China";
KTGrad[195] =  12; KTFest[195] = "Knud, K&ouml;nig von D&auml;nemark, M&auml;rtyrer (1086); Erich, K&ouml;nig von Schweden, M&auml;rtyrer (1160); Olaf, K&ouml;nig von Norwegen (1030)";
KTGrad[196] =  7; KTFest[196] = "BENEDIKT VON NURSIA, Vater des abendl&auml;ndischen M&ouml;nchtums (547), Patron Europas";
KTGrad[198] =  12; KTFest[198] = "Heinrich II. (1024) und Kunigunde (1033), Kaiserpaar";
KTGrad[199] =  12; KTFest[199] = "Kamillus von Lellis, Priester, Ordensgr&uuml;nder (1614)";
KTGrad[200] =  10; KTFest[200] = "Bonaventura, Ordensmann, Bischof, Kirchenlehrer (1274)";
KTGrad[201] =  12; KTFest[201] = "Gedenktag Unserer Lieben Frau auf dem Berge Karmel";
KTGrad[205] =  12; KTFest[205] = "Margareta, Jungfrau, M&auml;rtyrin in Antiochien ";
KTFest[205]+= "<br>Apollinaris, Bischof, M&auml;rtyrer (um 200)";
KTGrad[206] =  12; KTFest[206] = "Laurentius von Brindisi, Ordenspriester, Kirchenlehrer (1619)";
KTGrad[207] =  10; KTFest[207] = "Maria Magdalena";
// KTGrad[208] =  12; KTFest[208] = "Birgitta von Schweden, Ordensgr&uuml;nderin (1373)";
KTGrad[208] =  7; KTFest[208] = "BIRGITTA VON SCHWEDEN, Ordensgr&uuml;nderin, Patronin Europas (1373)";
KTGrad[209] =  12; KTFest[209] = "Christophorus, M&auml;rtyrer in Kleinasien (um 250)";
KTFest[209]+= "<br>Scharbel Mahluf, Ordenspriester (1898)";
KTGrad[210] =  7; KTFest[210] = "JAKOBUS, Apostel";
KTGrad[211] =  10; KTFest[211] = "Joachim und Anna, Eltern der Gottesmutter Maria";
KTGrad[214] =  10; KTFest[214] = "Marta von Betanien";
KTGrad[215] =  12; KTFest[215] = "Petrus Chrysologus, Bischof von Ravenna, Kirchenlehrer (450)";
KTGrad[216] =  10; KTFest[216] = "Ignatius von Loyola, Priester, Ordensgr&uuml;nder (1556)";
KTGrad[217] =  10; KTFest[217] = "Alfons Maria von Liguori, Ordensgr&uuml;nder, Bischof, Kirchenlehrer (1787)";
KTGrad[218] =  12; KTFest[218] = "Eusebius, Bischof von Vercelli, M&auml;rtyrer (371)";
KTFest[218]+= "<br>Pierre-Julien Eymard, Priester (1811-1868)";
KTGrad[220] =  10; KTFest[220] = "Johannes Maria Vianney, Pfarrer von Ars (1859)";
KTGrad[221] =  12; KTFest[221] = "Weihetag der Basilika Santa Maria Maggiore in Rom";
KTGrad[222] =  5; KTFest[222] = "VERKL&Auml;RUNG DES HERRN";
KTGrad[223] =  12; KTFest[223] = "Xystus II., Papst, und Gef&auml;hrten, M&auml;rtyrer";
KTFest[223]+= "<br>Kajetan, Priester, Ordensgr&uuml;nder (1547)";
KTGrad[224] =  10; KTFest[224] = "Dominikus, Priester, Ordensgr&uuml;nder (1221)";
// KTGrad[225] =  12; KTFest[225] = "Theresia Benedicta vom Kreuz (Edith Stein), M&auml;rtyrin und Ordensfrau (1891-1942)";
KTGrad[225] =  7; KTFest[225] = "THERESIA BENEDICTA VOM KREUZ (EDITH STEIN), M&auml;rtyrin und Ordensfrau, Patronin Europas (1891-1942)";
KTGrad[226] =  7; KTFest[226] = "LAURENTIUS, Diakon, M&auml;rtyrer in Rom (258)";
KTGrad[227] =  10; KTFest[227] = "Klara von Assisi, Jungfrau, Ordensgr&uuml;nderin (1253)";
KTGrad[228] =  12; KTFest[228] = "Johanna Franziska von Chantal, Ordensgr&uuml;nderin (1641)";
KTGrad[229] =  12; KTFest[229] = "Pontianus, Papst, und Hippolyt, Priester, M&auml;rtyrer (235)";
KTGrad[230] =  10; KTFest[230] = "Maximilian Kolbe, Ordenspriester, M&auml;rtyrer (1941)";
KTGrad[231] =  3; KTFest[231] = "MARI&Auml; AUFNAHME IN DEN HIMMEL";
KTGrad[232] =  12; KTFest[232] = "Stephan, K&ouml;nig von Ungarn (1038)";
KTGrad[235] =  12; KTFest[235] = "Johannes Eudes, Priester, Ordensgr&uuml;nder (1680)";
KTGrad[236] =  10; KTFest[236] = "Bernhard von Clairvaux, Abt, Kirchenlehrer(1153)";
KTGrad[237] =  10; KTFest[237] = "Pius X., Papst (1914)";
KTGrad[238] =  10; KTFest[238] = "Maria K&ouml;nigin";
KTGrad[239] =  12; KTFest[239] = "Rosa von Lima, Jungfrau (1617)";
KTGrad[240] =  7; KTFest[240] = "BARTHOLOM&Auml;US, Apostel";
KTGrad[241] =  12; KTFest[241] = "Ludwig, K&ouml;nig von Frankreich (1270)";
KTFest[241]+= "<br>Josef von Calasanza, Priester, Ordensgr&uuml;nder (1648)";
KTGrad[243] =  10; KTFest[243] = "Monika, Mutter des Augustinus (387)";
KTGrad[244] =  10; KTFest[244] = "Augustinus, Bischof von Hippo, Kirchenlehrer (430)";
KTGrad[245] =  10; KTFest[245] = "Enthauptung Johannes' des T&auml;ufers";
KTGrad[247] =  12; KTFest[247] = "Paulinus, Bischof von Trier, M&auml;rtyrer (358)";
KTGrad[250] =  10; KTFest[250] = "Gregor der Gro&szlig;e, Papst, Kirchenlehrer (604)";
KTGrad[255] =  7; KTFest[255] = "MARIA GEBURT";
KTGrad[256] =  12; KTFest[256] = "Petrus Claver, Priester und Missionar (1580-1654)";
KTGrad[259] =  12; KTFest[259] = "Mari&auml; Namen";
KTGrad[260] =  10; KTFest[260] = "Johannes Chrysostomus, Bischof von Konstantinopel, Kirchenlehrer (407)";
KTGrad[261] =  5; KTFest[261] = "KREUZERH&Ouml;HUNG";
KTGrad[262] =  10; KTFest[262] = "Ged&auml;chtnis der Schmerzen Mariens";
KTGrad[263] =  10; KTFest[263] = "Kornelius, Papst (253), und Cyprian, Bischof von Karthago, M&auml;rtyrer (258)";
KTGrad[264] =  12; KTFest[264] = "Hildegard von Bingen, Abtissin, Mystikerin, Gr&uuml;nderin von Rupertsberg und Eibingen (1179)";
KTFest[264]+= "<br>Robert Bellarmin, Ordenspriester, Bischof von Capua, Kirchenlehrer (1621)";
KTGrad[265] =  12; KTFest[265] = "Lambert, Bischof von Maastricht (Tongern), Glaubensbote in Brabant, M&auml;rtyrer (um 705)";
KTGrad[266] =  12; KTFest[266] = "Januarius, Bischof von Neapel, M&auml;rtyrer (um 304)";
KTGrad[267] =  10; KTFest[267] = "Andreas Kim Taegon, Priester, und Paul Chong Hasang und Gef&auml;hrten, M&auml;rtyrer in Korea (1839-1866";
KTGrad[268] =  7; KTFest[268] = "MATTH&Auml;US, Apostel und Evangelist";
KTGrad[269] =  12; KTFest[269] = "Mauritius und Gef&auml;hrten, M&auml;rtyrer der Theb&auml;ischen Legion (280-305)";
KTGrad[270] =  10; KTFest[270] = "Pio da Pietrelcina (Padre Pio), Ordenspriester (1968)";
KTGrad[271] =  12; KTFest[271] = "Rupert (718) und Virgil (784), Bisch&ouml;fe von Salzburg, Glaubensboten";
KTGrad[272] =  12; KTFest[272] = "Niklaus von Fl&uuml;e, Einsiedler, Friedensstifter (1487)";
KTGrad[273] =  12; KTFest[273] = "Kosmas und Damian, &Auml;rzte, M&auml;rtyrer in Kleinasien (303)";
KTGrad[274] =  10; KTFest[274] = "Vinzenz von Paul, Priester, Ordensgr&uuml;nder (1660)";
KTGrad[275] =  12; KTFest[275] = "Lioba, Abtissin von Tauberbischofsheim (um 782)";
KTFest[275]+= "<br>Lorenzo Ruiz und Gef&auml;hrten, M&auml;rtyrer (1633-1637)";
KTFest[275]+= "<br>Wenzel, Herzog von B&ouml;hmen, M&auml;rtyrer (929)";
KTGrad[276] =  7; KTFest[276] = "MICHAEL, GABRIEL UND RAFAEL, Erzengel";
KTGrad[277] =  10; KTFest[277] = "Hieronymus, Priester, Kirchenlehrer (420)";
KTGrad[279] =  10; KTFest[279] = "Theresia vom Kinde Jesus, Ordensfrau (1897)";
KTGrad[280] =  10; KTFest[280] = "Schutzengel";
KTGrad[282] =  10; KTFest[282] = "Franz von Assisi, Ordensgr&uuml;nder (1226)";
KTGrad[284] =  12; KTFest[284] = "Bruno, M&ouml;nch, Einsiedler, Ordensgr&uuml;nder (1101)";
KTGrad[285] =  10; KTFest[285] = "Gedenktag Unserer Lieben Frau vom Rosenkranz";
KTGrad[287] =  12; KTFest[287] = "Dionysius, Bischof von Paris, und Gef&auml;hrten, M&auml;rtyrer (nach 250)";
KTFest[287]+= "<br>Johannes Leonardi, Priester, Ordensgr&uuml;nder (1609)";
KTGrad[292] =  12; KTFest[292] = "Kallistus I., Papst, M&auml;rtyrer (222)";
KTGrad[293] =  10; KTFest[293] = "Theresia von Avila, Ordensfrau, Kirchenlehrerin (1582)";
KTGrad[294] =  12; KTFest[294] = "Hedwig von Andechs, Herzogin von Schlesien (1243)";
KTFest[294]+= "<br>Gallus, M&ouml;nch, Einsiedler, Glaubensbote am Bodensee (um 640)";
KTFest[294]+= "<br>Margareta Maria Alacoque, Ordensfrau (1690)";
KTGrad[295] =  10; KTFest[295] = "Ignatius, Bischof von Antiochien, M&auml;rtyrer (um 115)";
KTGrad[296] =  7; KTFest[296] = "LUKAS, Evangelist";
KTGrad[297] =  12; KTFest[297] = "Johannes de Br&eacute;beuf, Isaak Jogues, Priester, und Gef&auml;hrten, M&auml;rtyrer in Nordamerika (1642-1649)";
KTFest[297]+= "<br>Paul vom Kreuz, Priester, Ordensgr&uuml;nder (1775)";
KTGrad[298] =  12; KTFest[298] = "Wendelin, Einsiedler im Saarland (6. Jh.)";
KTGrad[299] =  12; KTFest[299] = "Ursula und Gef&auml;hrtinnen, M&auml;rtyrinnen in K&ouml;ln (um 304)";
KTGrad[301] =  12; KTFest[301] = "Johannes von Capestrano, Ordenspriester, Wanderprediger in S&uuml;ddeutschland und &Ouml;sterreich (1456)";
KTGrad[302] =  12; KTFest[302] = "Antonius Maria Claret, Bischof von Santiago in Kuba, Ordensgr&uuml;nder (1870)";
KTGrad[306] =  7; KTFest[306] = "SIMON UND JUDAS, Apostel";
KTGrad[309] =  12; KTFest[309] = "Wolfgang, Bischof von Regensburg (994)";
KTGrad[310] =  3; KTFest[310] = "ALLERHEILIGEN";
KTGrad[311] =  3.5; KTFest[311] = "Allerseelen";
KTGrad[312] =  12; KTFest[312] = "Hubert, Bischof von L&uuml;ttich (727)";
KTFest[312]+= "<br>Pirmin, Abtbischof, Glaubensbote am Oberrhein (753)";
KTFest[312]+= "<br>Martin von Porres, Ordensmann (1639)";
KTFest[312]+= "<br>Rupert Mayer, Priester (1876-1945)";
KTGrad[313] =  10; KTFest[313] = "Karl Borrom&auml;us, Bischof von Mailand (1584)";
KTGrad[315] =  12; KTFest[315] = "Leonhard, Einsiedler von Limoges (6. Jh.)";
KTGrad[316] =  12; KTFest[316] = "Willibrord, Bischof von Utrecht, Glaubensbote bei den Friesen (739)";
KTGrad[318] =  5; KTFest[318] = "WEIHETAG DER LATERANBASILIKA";
KTGrad[319] =  10; KTFest[319] = "Leo der Gro&szlig;e, Papst, Kirchenlehrer (461)";
KTGrad[320] =  10; KTFest[320] = "Martin, Bischof von Tours (397)";
KTGrad[321] =  10; KTFest[321] = "Josaphat, Bischof von Polozk in Wei&szlig;ru&szlig;land, M&auml;rtyrer (1623)";
KTGrad[324] =  12; KTFest[324] = "Albert der Gro&szlig;e, Ordensmann, Kirchenlehrer, Bischof von Regensburg (1280)";
KTFest[324]+= "<br>Leopold, Markgraf von &Ouml;sterreich (1136)";
KTGrad[325] =  12; KTFest[325] = "Margareta, K&ouml;nigin von Schottland (1039)";
KTGrad[326] =  12; KTFest[326] = "Gertrud von Helfta, Ordensfrau, Mystikerin (1302)";
KTGrad[327] =  12; KTFest[327] = "Weihetag der Basiliken St. Peter und St. Paul zu Rom";
KTGrad[328] =  10; KTFest[328] = "Elisabeth, Landgr&auml;fin von Th&uuml;ringen (1231)";
// noch nicht offiziell:
// KTGrad[329] =  12; KTFest[329] = "Korbinian, Glaubensbote und Bischof von Freising (* um 680, + um 728)";
KTGrad[330] =  10; KTFest[330] = "Gedenktag Unserer Lieben Frau in Jerusalem";
KTGrad[331] =  10; KTFest[331] = "C&auml;cilia, Jungfrau, M&auml;rtyrin in Rom (um 250)";
KTGrad[332] =  12; KTFest[332] = "Kolumban, Abt von Luxeuil und von Bobbio, Glaubensbote im Frankenreich (615)";
KTFest[332]+= "<br>Klemens I., Papst, M&auml;rtyrer (101)";
KTGrad[333] =  10; KTFest[333] = "Andreas Dung-Lac, Priester, und Gef&auml;hrten, M&auml;rtyrer in Vietnam (17.-19. Jh.)";
KTGrad[334] =  12; KTFest[334] = "Katharina von Alexandrien, M&auml;rtyrin (4. Jh.)";
KTGrad[335] =  12; KTFest[335] = "Konrad (975) und Gebhard (995), Bisch&ouml;fe von Konstanz";
KTGrad[339] =  7; KTFest[339] = "ANDREAS, Apostel";
KTGrad[342] =  12; KTFest[342] = "Luzius, Bischof von Chur, M&auml;rtyrer (5./6. Jh.)";
KTGrad[343] =  10; KTFest[343] = "Franz Xaver, Ordenspriester, Glaubensbote in Indien und Ostasien (1552)";
KTGrad[344] =  12; KTFest[344] = "Barbara, M&auml;rtyrin in Nikomedien (306)";
KTFest[344]+= "<br>Adolph Kolping, Priester (1813-1865)";
KTFest[344]+= "<br>Johannes von Damaskus, Priester, Kirchenlehrer (um 750)";
KTGrad[345] =  12; KTFest[345] = "Anno, Bischof von K&ouml;ln, Reichskanzler (1075)";
KTGrad[346] =  12; KTFest[346] = "Nikolaus, Bischof von Myra (um 350)";
KTGrad[347] =  10; KTFest[347] = "Ambrosius, Bischof von Mailand, Kirchenlehrer (397)";
KTGrad[348] =  3; KTFest[348] = "HOCHFEST DER OHNE ERBS&Uuml;NDE EMPFANGENEN JUNGFRAU UND GOTTESMUTTER MARIA";
KTGrad[349] =  12; KTFest[349] = "Juan Diego Cuauhtlatoatzin (1474-1548)";
KTGrad[351] =  12; KTFest[351] = "Damasus I., Papst (384)";
KTGrad[352] =  12; KTFest[352] = "Unsere liebe Frau in Guadalupe";
// KTGrad[353] =  12; KTFest[353] = "Odilia, Abtissin, Gr&uuml;nderin von Odilienberg und Niederm&uuml;nster im Elsa&szlig; (um 720)";
// KTFest[353]+= "<br>Luzia, Jungfrau, M&auml;rtyrin in Syrakus (um 304)";
// Luzia wurde aufgewertet (wann?)
KTGrad[353] =  10; KTFest[353] = "Luzia, Jungfrau, M&auml;rtyrin in Syrakus (um 304)";
KTGrad[354] =  10; KTFest[354] = "Johannes vom Kreuz, Ordenspriester, Kirchenlehrer (1591)";
KTGrad[363] =  12; KTFest[363] = "Johannes von Krakau, Priester (1473)";
KTGrad[365] =  3; KTFest[365] = "WEIHNACHTEN, HOCHFEST DER GEBURT DES HERRN";
KTGrad[366] =  7; KTFest[366] = "ZWEITER WEIHNACHTSTAG; STEPHANUS, erster M&auml;rtyrer";
KTGrad[367] =  7; KTFest[367] = "JOHANNES, Apostel und Evangelist";
KTGrad[368] =  7; KTFest[368] = "UNSCHULDIGE KINDER";
KTGrad[369] =  12; KTFest[369] = "Thomas Becket, Bischof von Canterbury, M&auml;rtyrer (1170)";
KTGrad[371] =  12; KTFest[371] = "Silvester I., Papst (335)";

  for (i=0; i<372; i++) {
    var zg=KTGrad[i];
// KTFest[i]="{"+KTGrad[i]+"} "+KTFest[i]; TEST!!!
    // nur runde Werte werden gekennzeichnet
    if(zg>2.5 && Math.floor(zg)==zg) {
      if(zg>4.5) {
        if(zg<5.5 || (zg>6.5 && zg<8.5)) KTFest[i]+=" [F]";
        else if(zg>9.5 && zg<11.5) KTFest[i]+=" [G]";
      } else KTFest[i]+=" [H]";
    }
  }
}

function dattagT(TaT,MoT,JaT) {
  var dt, MonatsTag;
  Ta = parseInt(TaT);
  Mo = parseInt(MoT);
  Ja = parseInt(JaT);
  if (Ja > 2499 || Ja < 1) {
    alert("Berechnung nur bis zum Jahr 2499!"); dt = -99;
  }
  else {
    if (Ja<100) {
      alert("Die Jahreszahl\n   "+Ja+"\nwird als Datum des\n1. Jahrhunderts n. Chr.\ninterpretiert.");
    }
    if (Mo > 12 || Mo < 1) {
      alert("Als Monate bitte nur Zahlen von 1 bis 12 eingeben!"); dt = -99;
    }
    else {
      if (Ta > 31 || Ta < 1) {
        alert("Als Tage bitte nur Zahlen von 1 bis 31 eingeben!"); dt = -99;
      }
      else {
        MonatsTag = MonatsTage[Mo];
        if (Mo == 2)
          if ((Ja % 4) == 0 && (Ja < 1582 || (Ja % 100) > 0 || (Ja % 400) == 0)) MonatsTag = 29;
        if (Ta > MonatsTag) {
          alert("Der Monat " + MonatsName[Mo] + " hat nur " + MonatsTag + " Tage!"); dt = -99;
        }
        else {
          dt = dattage(Ta, Mo, Ja);
          if (dt <= -20) alert("Unerlaubtes Datum!");
        }
      }
    }
  }
  return dt;
}

function dattage(Ta, Mo, Ja) {
  var dattag = 365 * Ja + Ta;
  for (i=1;i<Mo;i++) dattag+= MonatsTage[i];
  if (Ja < 1582) {
    dattag+= 10;
    for (i = 1580; i >= Ja; i-= 4 )
      dattag--;
  }
  else
  if (Ja == 1582) {
    if (Mo == 10) {
      if (Ta < 5) dattag+= 10;
      else
      if (Ta < 15) dattag = -99;
    }
    else if (Mo < 10) dattag+= 10;
  }
  else
  if (Ja > 2499) dattag = -99;
  else {
    for (i = 1584; i < Ja; i+= 4)
      dattag++;
    for (i = 1700; i < Ja; i+= 100)
      if ((i % 400) > 0) dattag--;
  }
  if (dattag > 0) {
    if ((Ja % 4) == 0 && Mo > 2 & (Ja < 1582 || (Ja % 100) > 0 || (Ja % 400) == 0)) dattag++;
  }
  return dattag;
}

function datum(dattag) {
  var MonatsTag
  Ja = Math.floor(dattag/365); Ta = dattag-(365*Ja)
  if (dattag < 577718) {
    Ta-= 10;
    for (i = 1580; i >= Ja; i-= 4) Ta++;
  }
  else {
    for (i = 1584; i < Ja; i+= 4) Ta--;
    for (i = 1700; i < Ja; i+= 100) {
      if ((i % 400) > 0) Ta++;
    }
  }
  while (Ta > 365) {
    Ta-= 365;
    if ((Ja % 4) == 0 && (Ja < 1582 || (Ja % 100) > 0 || (Ja % 400) == 0)) Ta--;
    Ja++;
  }
  while (Ta < 1) {
    Ta+= 365;
    Ja--;
    if ((Ja % 4) == 0 && (Ja < 1582 || (Ja % 100) > 0 || (Ja % 400) == 0)) Ta++;
  }
  Mo = 1;
  for (i = 1; i <= 12; i++) {
    MonatsTag = MonatsTage[i];
    if (i == 2)
      if ((Ja % 4) == 0 && (Ja < 1582 || (Ja % 100) > 0 || (Ja % 400) == 0)) MonatsTag = 29;
    if (Ta > MonatsTag) {
      Ta-= MonatsTag;
      Mo++;
    }
    else break;
  }
  datumtxt = "<B>" + WoTag(dattag) + " &nbsp;</B></TD><TD><B>" + Ta + ". " + MonatsName[Mo] + " " + Ja + "</B>";
  return datumtxt;
}

function WoTag(dattag) {
  wt = (dattag + 25) % 7;
  wota = WochenTag[wt];
  return wota;
}


function setzeheutef2() {
  jetzt = new Date(); jjahr = jetzt.getYear();
  if(jjahr < 1000) jjahr+=1900;
  document.f2.Jahr.value = jjahr;
}


function Zeige(Erg,Ja) {
  if(document.Ausgabeziel.Ziel[0].checked==true) {
    var dru = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 3.2//EN\">" +
        "<HTML><HEAD>\n<TITLE>Liturgischer Kalender "+Ja+"</TITLE>\n" +
        "</HEAD>\n<BODY bgcolor=\"#99CCFF\" TEXT=\"#003399\" " +
        "LINK=\"#0000FF\" VLINK=\"#990099\" ALINK=\"#FF0000\">"+
        "<H2>Liturgischer Kalender "+Ja+"</H2>\n" +
        Erg + "\n<P><BR><FONT SIZE=-1><I>Zum Berechnungsformular geht's mit der Browser-Funktion \"Zur&uuml;ck\".</I></FONT></P>" +
        "\n</BO"+"DY>\n";
    document.clear();
    document.open("text/html");
    document.write(dru);
    document.close();
  }
  else {
    var dru = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 3.2//EN\">" +
        "<HTML><HEAD>\n<TITLE>Liturgischer Kalender "+Ja+"</TITLE>\n" +
        "</HEAD>\n<BODY bgcolor=\"#99CCFF\" TEXT=\"#003399\" " +
        "LINK=\"#0000FF\" VLINK=\"#990099\" ALINK=\"#FF0000\">"+
        "<H2>Liturgischer Kalender "+Ja+"</H2>\n" +
        Erg + "\n<P><BR><FONT SIZE=-1><I><B>Empfehlung:</B> Bitte abspeichern, falls das Ergebnis noch gebraucht wird.<br>" +
        "Um eine neue Anfrage zu starten, dieses Fenster schlie&szlig;en.<br>" +
        "Oder zum Eingabefenster wechseln und nach dem Berechnen zu diesem Ergebnisfenster " +
        "zur&uuml;ckkehren</I></FONT></P>" +
        "\n</BO"+"DY>\n";
    var ErgebnisW = window.open("", "ErgebnisW", "menubar=yes,scrollbars=yes,resizable=yes");
    ErgebnisW.document.close();
    ErgebnisW.document.open("text/html");
    ErgebnisW.document.write(dru);
    ErgebnisW.document.close();
  }
}

var RStackP = 0;
var RStackR = new Array(); var RStackT = new Array(); var RStackA = new Array();
var AnmZus = "";

function rangh(RTag, RMonat, RText, RRang) {
  window.status = "Berechne das Datum "+RTag+"."+RMonat+".";
  AnmZus="";
  HRang = KTGrad[(RMonat-1)*31+RTag-1];
  if(HRang == 0 || HRang > RRang) {
    NRang = RRang; NText = RText;
    if (HRang > 0 && HRang < 5) {
      RStackR[RStackP] = HRang; RStackT[RStackP] = KTFest[(RMonat-1)*31+RTag-1];
      RStackA[RStackP] = "<FONT SIZE=-1>(Hochfest verlegt<BR>vom "+
          ATag+"."+AMonat+".)</FONT>";
      RStackP++;
    }
  }
  else {
    NRang = HRang;
    if(HRang==RRang)
      { NText = RText + "<br><i>oder:</i><br>" + KTFest[(RMonat-1)*31+RTag-1]; }
    else { NText = KTFest[(RMonat-1)*31+RTag-1]; }
  }
  if (RStackP > 0) {
    Rmax=NRang;imax=-1;
    for(i=0;i<RStackP;i++) {
      if (RStackR[i] < Rmax) {Rmax=RStackR[i]; imax=i;}
    }
    if (imax >= 0) {
      NText=RStackT[imax]; NRang=RStackR[imax]; AnmZus=RStackA[imax];
      RStackP--;
      RStackT[imax]=RStackT[RStackP]; RStackR[imax]=RStackR[RStackP];
    }
  }
  if (NRang == 9 && HRang > 9)
    NText+= "<br><i>Kommemoration:</i><br>" + KTFest[(RMonat-1)*31+RTag-1];
  if (NRang == 12) NText = RText + "<br><i>oder:</i><br>" + NText
  return NText;
}

function KalZei(ftxt,fgrd,anm) {
  Ausg+= "<TR VALIGN=top><TD>" + WochenTag[WoT] + ".,&nbsp;" +
      ATag+"."+AMonat+"."+Ja+"</TD><TD>" +
      rangh(ATag,AMonat,ftxt,fgrd)+"</TD>";
  if (anm=="") { anm = AnmZus ; } else {anm+= AnmZus ; }
  if (anm=="") { anm = "&nbsp;"; }
  Ausg+="<TD>"+ anm +"</TD></TR>\n";
  ATag++; AT++; WoT = (WoT < 6) ? WoT + 1 : 0;
  if (ATag > MonatsTage[AMonat]) {
    if (AMonat!=2 || ATag > MonatsTage[AMonat] + Schaltjahr) {ATag=1;AMonat++;}
  }
}

Ausg="";

function ber2() {
  var M, N, a, b, c, d, e, OT;
  Ja = parseInt(document.f2.Jahr.value);
  RStackP=0;
  if (Ja >= 1583 && Ja < 2500) {
    LadeKT();
    if(Ja<2000) {
      alert("Achtung: Vergangene Jahre werden unter der (falschen!)\n" +
            "Annahme berechnet, dass die heutigen Bestimmungen (2004)\n" +
            "damals schon genau so gegolten haetten."); }
    if ((Ja % 4) == 0 && (Ja < 1582 || (Ja % 100) > 0 || (Ja % 400) == 0))
      {Schaltjahr = 1} else Schaltjahr = 0;
    Ausg = "<TABLE bgcolor=\"#FFFFFF\" BORDER=2 CELLSPACING=1 CELLPADDING=1>\n" +
        "<TR VALIGN=top><TH><I>Datum</I></TH><TH><I>Liturgie</I></TH>" +
        "<TH><I>Anmerkungen</I></TH></TR>\n";
    ATag = 1; AMonat = 1; AT = dattage(1,1,Ja); WoT = (AT + 25) % 7;
    NT=AT+6;
    Anm = (WoT == 0) ? "StB: 2. Woche" : "StB: 1. Woche";
    Anm+= "<br>Bd. Advent und<br>Weihnachtszeit";
    KalZei("",13,Anm);
    while(NT>AT) {
      if (WoT == 0) {
        Anm = "StB: 2. Woche";
        KalZei("2. SONNTAG NACH WEIHNACHTEN",6,Anm);
      }
      else KalZei("Wochentag in der Weihnachtszeit",13,"");
    }
    while(WoT > 0) { KalZei("Wochentag nach Erscheinung",13,""); }
    Anm = "StB: 1. Woche<br>Bd. Im Jahreskreis<br>(ab Montag)";
    KalZei("TAUFE DES HERRN [F]",5,Anm);

    if (Ja<1583) {M = 15; N = 6; }
    else {
      jj=Math.floor(Ja/100);
      M = jhunm[jj-15]; N = jhunn[jj-15];
    }
    a = Ja % 19; b = Ja % 4; c = Ja % 7;
    d = (19 * a + M) % 30;
    e = (2 * b + 4 * c + 6 * d + N) % 7;
    if (e + d == 35 || (d == 28 && e == 6 && a > 10)) d-= 7;
    OT = dattage(22,3,Ja) + e +d;

    NT = OT-46; JKrWo=1; StBWo=1;
    while(NT>AT) {
      if (WoT == 0) {
        JKrWo++; StBWo = (StBWo==4) ? 1 : StBWo+1;
        Anm = "StB: "+StBWo+". Woche";
        KalZei(JKrWo+". SONNTAG IM JAHRESKREIS",6,Anm);
      }
      else { KalZei("Wochentag ("+JKrWo+". Woche)",13,""); }
    }

    Anm = "StB: 4. Woche<br>Bd. Fasten- und<br>Osterzeit";
    KalZei("ASCHERMITTWOCH",2,Anm);

    NT = OT-7; StBWo=4; JKrWo=0;
    while(NT>AT) {
      if (WoT == 0) {
        JKrWo++; StBWo = (StBWo==4) ? 1 : StBWo+1;
        Anm = "StB: "+StBWo+". Woche";
        KalZei(JKrWo+". SONNTAG DER FASTENZEIT",2,Anm);
      }
      else {
        FText = "Wochentag ("+JKrWo+". Woche der Fastenzeit)";
        if (JKrWo==0) FText = "Wochentag nach Aschermittwoch";
        KalZei(FText,9,"");
      }
    }

    JKrWo++; StBWo++;
    Anm = "StB: "+StBWo+". Woche";
    FGrad = KTGrad[(AMonat-1)*31+ATag-1];
    if(FGrad > 1 && FGrad < 5)
      { Anm+="<br><FONT SIZE=-1><B>Achtung!</B> Evtl. wird das Hochfest<BR>" + KTFest[(AMonat-1)*31+ATag-1]
      + "<BR>auf den gestrigen<BR>Samstag vorverlegt.<BR>(Vgl. Prot. CD 500/89)</FONT>"; }
    KalZei("PALMSONNTAG",2,Anm);

    NT = OT-3;
    while (NT>AT) { KalZei("Wochentag der Karwoche",2,""); }

    KalZei("GR&Uuml;NDONNERSTAG",1,"");

    KalZei("KARFREITAG",1,"");

    KalZei("KARSAMSTAG",1,"");

    JKrWo=1; StBWo=1;
    Anm = "(StB: 1. Woche)";
    KalZei("OSTERSONNTAG",1,Anm);

    KalZei("OSTERMONTAG",2,"");

    NT=OT+7;
    while(AT<NT) {
      KalZei((8+AT-NT)+". Tag der Osteroktav",2,"");
    }

    NT = OT+49;
    while(NT>AT) {
      if (WoT == 0) {
        JKrWo++; StBWo = (StBWo==4) ? 1 : StBWo+1;
        Anm = "StB: "+StBWo+". Woche";
        if(JKrWo == 2) {
          KalZei("2. SONNTAG DER OSTERZEIT<br>oder Barmherzigkeitssonntag<br>oder Wei&szlig;er Sonntag",2,Anm);
        }
        else {
          KalZei(JKrWo+". SONNTAG DER OSTERZEIT",2,Anm);
        }
      }
      else {
        if (AT == OT+39) {
          KalZei("CHRISTI HIMMELFAHRT [H]",3,"");
        }
        else {
          FText = "Wochentag ("+JKrWo+". Woche der Osterzeit)";
          KalZei(FText,13,"");
        }
      }
    }

    NT = dattage(3,12,Ja); wt = (NT+4) % 7; NT-= wt;
    JKrWo = 35 - ((NT-AT)/7); StBWo = JKrWo % 4; if (StBWo == 0) StBWo = 4;
    Anm="StB: vom<br>Hochfest";
    KalZei("PFINGSTEN",2,Anm);

    while(NT>AT) {
      if (WoT == 0) {
        JKrWo++; StBWo = (StBWo==4) ? 1 : StBWo+1;
        Anm = "StB: "+StBWo+". Woche";
        FText = JKrWo+". SONNTAG IM JAHRESKREIS"; FGrad = 6;
        if (AT == OT+56)  {FText = "DREIFALTIGKEITSSONNTAG [H]"; FGrad = 3; }
        if (JKrWo == 34) {FText = "CHRISTK&Ouml;NIGSSONNTAG [H]"; FGrad = 3; }
        KalZei(FText,FGrad,Anm);
      }
      else {
        Anm = "";
        FText = "Wochentag ("+JKrWo+". Woche)"; FGrad = 13;
        if (AT == OT+50) { Anm = "PFINGST-<br>MONTAG<br>StB: "+StBWo+". Woche<br>Bd. Im Jahreskreis"; }
        if (AT == OT+60) {FText = "FRONLEICHNAM [H]"; FGrad = 3; }
        if (AT == OT+68) {FText = "HERZ JESU [H]"; FGrad = 3; }
        if (AT == OT+69) {FText = "Herz Mari&auml; [G]"; FGrad = 10; }
        KalZei(FText,FGrad,Anm);
      }
    }

    JKrWo = 0; StBWo = 0;
    while(25>ATag || AMonat==11) {
      if (WoT == 0) {
        JKrWo++; StBWo = (StBWo==4) ? 1 : StBWo+1;
        Anm = "StB: "+StBWo+". Woche";
        if (JKrWo == 1) Anm+= "<br>Bd. Advent und<br>Weihnachtszeit";
        FText = JKrWo+". SONNTAG IM ADVENT"; FGrad = 2;
        KalZei(FText,FGrad,Anm);
      }
      else {
        FText = "Wochentag ("+JKrWo+". Woche im Advent)"; FGrad = 13;
        if (AMonat == 12 && ATag > 16) {FText = "Wochentag "+ATag+". Dezember"; FGrad = 9; }
        KalZei(FText,FGrad,"");
      }
    }

    NT = 32-WoT; if (NT == 32) NT = 30;
    while(31>=ATag && AMonat==12) {
      if (WoT == 0) {
        StBWo = (StBWo==4) ? 1 : StBWo+1;
        Anm = "(StB: "+StBWo+". Woche)";
        KalZei("FEST DER HEILIGEN FAMILIE [F]",5,Anm);
      }
      else {
        FText = (ATag-24)+". Tag der Weihnachtsoktav"; FGrad = 9;
        if (NT == ATag) {FText = "FEST DER HEILIGEN FAMILIE [F]"; FGrad = 5;}
        KalZei(FText,FGrad,"");
      }
    }

    Ausg+="</TABLE>\n<P><FONT=-1>Anmerkungen: " +
          "In eckigen Klammern ist angegeben, ob es sich um ein Hochfest [H], " +
          "ein Fest [F] oder einen gebotenen Gedenktag [G] handelt. " +
          "Beim Ostertriduum, bei Sonntagen, Allerseelen und bei nicht-gebotenen Gedenktagen " +
          "fehlt diese Angabe. " +
          "Hinter 'StB' (=Stundenbuch) wird die ab dem jeweiligen Sonntag " +
          "f&uuml;r das Stundengebet geltende Woche des Vierwochenpsalters angegeben. " +
          "</FONT></P>\n"

    window.status = "Fertig.";
    Zeige(Ausg,Ja);
}
  else alert("Erlaubt sind nur Jahreszahlen von 1583 bis 2499 nach Christus.");
}

function weiterleit() {
  
    setzeheutef2();
}
