// express web uygulmaları geliştirmek için sistemlerden birisidir. Framework dediğimiz yapı.
// express http modülü üzerinde çalışıyor.
// en önemli özelliklerinden bir tanesi middleware ile çalışıyor.
//yani server a gelen istekleri önce üzerinde işlemler yapıyor.
// gelen istekleri parçalara bölüp bu şekilde ele alıyoruz.
// örneğin middleware kimlik doğrulamasında kullanılır.
// routing yönlendirmede kullanılır.

module.exports = [ // export ettik. data.js dosyasını bir yere import ettiğimizde bize bu dosya gelicek.
    {
        id: 1,
        isim: "Kemal Sunal",
        filmler: ["Sakar Şakir", "Üç Kağıtçı", "Tosun Paşa"],
      },
      {
        id: 2,
        isim: "Şener Şen",
        filmler: ["Davaro", "Kibar Feyzo", "Tosun Paşa"],
      },
      {
        id: 3,
        isim: "Adile Naşit",
        filmler: ["Davaro", "Neşeli Günler", "Süt Kardeşler"],
      },
    ];
