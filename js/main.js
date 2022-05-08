/**
 * khoi 1:
 * loãie
 * soKM
 * tgCho
 * 
 * khoi 2:
 * b1: tao ham tinh tien
 * b2: lay gia tri tu form
 *      soKM, tgCho
 * 
 *      kiem tr nguoi dung dang chon radio nao
 * 
 * b3: tinh tien theo KM
 *      doan 1 
 *      neu 0 < soKm <=1 : tienKM = soKM * GiaKM_Dau
 *      doan 2:
 *      neu 1 < soKM <= 19 :tienKM = tienKM_Dau + (soKM - 1)*GiaKM1_19
 *      doan 3:
 *      neu 19 < soKM : tienKM = tienKM_Dau + (soKM - 1)*GiaKM1_19 + (soKM-19)*GiaKM_19
 * 
 * khoi 3: 
 * thanhTien
 */

const GiaKM_DauCar = 8000;
const GiaKM1_19Car = 7500;
const GiaKMTren19Car = 7000;
const GiaCho_car = 2000;

const GiaKM_DauSUV = 9000;
const GiaKM1_19SUV = 8500;
const GiaKMTren19SUV = 8000;
const GiaCho_SUV = 3000;

const GiaKM_DauBlack = 10000;
const GiaKM1_19Black = 9500;
const GiaKMTren19Black = 9000;
const GiaCho_Black = 3500;

function tinhTienXe() {
    //lay cac the radio
    var radioCar = document.getElementById("grabCar");
    var radioSUV = document.getElementById("grabSUV");
    var radioBlack = document.getElementById("grabBlack");

    var soKM = document.getElementById("KM").value;
    var tgCho = document.getElementById("time").value;
    // console.log(radioBlack, radioCar, radioSUV, soKM, tgCho );

    var loaixe = "";
    // kiem tra loai xe
    // radioCar.checked == true
    if (radioCar.checked) {
        loaixe = "Car";
    } else if (radioSUV.checked) {
        loaixe = "SUV";
    } else if (radioBlack.checked) {
        loaixe = "Black";
    } else {
        // console.log("loai xe chua dc chon");
        alert("loai xe chua duoc chon");
    }
    // console.log(loaixe);

    // tinh tien KM theo loai xe

    // tinh so lan phat
    var lanphat = 0;
    if (tgCho >= 3) {
        lanphat = Math.floor(tgCho/3);
    }

    var thanhTien = 0;

    switch (loaixe) {
        case "Car":
            // console.log("tinh loai c");
            if (0 < soKM && soKM <=1) {
                console.log ("doan 1");
                thanhTien = soKM * GiaKM_DauCar;

            } else if (1 < soKM && soKM <=19) {
                console.log ("doan 2");
                thanhTien = GiaKM_DauCar + (soKM - 1) * GiaKM1_19Car;

            } else if (19 < soKM && soKM) {
                console.log ("doan 3");
                thanhTien = GiaKM_DauCar + 18 * GiaKM1_19Car + (soKM-19) * GiaKMTren19Car;

            } else {
                alert("So KM khong hop le");
            }

            thanhTien = thanhTien + lanphat * GiaCho_car;

            break;

        case "SUV":
            // console.log("tinh loai s");
            if (0 < soKM && soKM <=1) {
                console.log ("doan 1");
                thanhTien = soKM * GiaKM_DauSUV;

            } else if (1 < soKM && soKM <=19) {
                console.log ("doan 2");
                thanhTien = GiaKM_DauSUV + (soKM - 1) * GiaKM1_19SUV;

            } else if (19 < soKM && soKM) {
                console.log ("doan 3");
                thanhTien = GiaKM_DauSUV + 18 * GiaKM1_19SUV + (soKM-19) * GiaKMTren19SUV;

            } else {
                alert("So KM khong hop le");
            }  
            
            thanhTien = thanhTien + lanphat * GiaCho_SUV;

            break;
        case "Black":
            // console.log("tinh loai b");
            if (0 < soKM && soKM <=1) {
                console.log ("doan 1");
                thanhTien = soKM * GiaKM_DauBlack;

            } else if (1 < soKM && soKM <=19) {
                console.log ("doan 2");
                thanhTien = GiaKM_DauBlack + (soKM - 1) * GiaKM1_19Black;

            } else if (19 < soKM && soKM) {
                console.log ("doan 3");
                thanhTien = GiaKM_DauBlack + 18 * GiaKM1_19Black + (soKM-19) * GiaKMTren19Black;

            } else {
                alert("So KM khong hop le");
            }

            thanhTien = thanhTien + lanphat * GiaCho_Black;

            break;

        default:
            // console.log ("loai xe khong xac dinh");
            break;
    }
    console.log (thanhTien);
}