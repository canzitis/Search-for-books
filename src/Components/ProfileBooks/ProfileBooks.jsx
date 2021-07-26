const ProfileBooks = (props) => {
  console.log(props);
  return (
    <div>{<img src={props.book.volumeInfo.imageLinks.large} alt="" />}</div>
  );
};

export default ProfileBooks;

// 20210726163447
// https://www.googleapis.com/books/v1/volumes/ZV2ACgAAQBAJ?key=AIzaSyC3L9NO1mvqLFNRmjKfpZ5w6lDuPUlzFQs

/* {
  "kind": "books#volume",
  "id": "ZV2ACgAAQBAJ",
  "etag": "dm45kbvJVT8",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/ZV2ACgAAQBAJ",
  "volumeInfo": {
    "title": "Geschichte der Sprach-, Dicht- und Redekunst",
    "authors": [
      "Theodor Heinsius"
    ],
    "publisher": "BoD – Books on Demand",
    "publishedDate": "2015-09-04",
    "description": "Nachdruck des Originals von 1823.",
    "industryIdentifiers": [
      {
        "type": "ISBN_10",
        "identifier": "3846085014"
      },
      {
        "type": "ISBN_13",
        "identifier": "9783846085011"
      }
    ],
    "readingModes": {
      "text": false,
      "image": true
    },
    "pageCount": 616,
    "printedPageCount": 617,
    "dimensions": {
      "height": "21.00 cm",
      "width": "14.80 cm",
      "thickness": "4.40 cm"
    },
    "printType": "BOOK",
    "categories": [
      "Foreign Language Study / German"
    ],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.1.1.0.preview.1",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/publisher/content?id=ZV2ACgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71KHgOfMKl7WLtpKbOJK9lfrcUjdLaAbU5HeBj8tDRHXi7jt2B_hV9vj903RbZ1zoG8Ix0wYYzXlp73akeWykRJ9DzFTmfHSszAfLu6EF46E30GSoon41RpshO60Ysv0ptdbh1p&source=gbs_api",
      "thumbnail": "http://books.google.com/books/publisher/content?id=ZV2ACgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72BpqgJ4HOpitLwxqyAbQK6h9sQ3p_CFuJTv24FedhambWYoz_AOweDjD-jJJ8aKsWM4EG843qPVbgnkIFA37zNgwl4IfXqHKMpc0CDLgVxQjfLpf47Un1MaVP0zG_sliKIO45V&source=gbs_api",
      "small": "http://books.google.com/books/publisher/content?id=ZV2ACgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70ujG_o8_jdmXkDEGdc3l_qFTfAuMyT4Hg43XKyCGnFllPrQ55ydLZMV9G0TOcfeVoMXq4qSUQNqeqByPxI-iBDwisqDLzK1wPiWEBUrCuk4Yeo2JrMbxGT5YyTri83qFqc6L3s&source=gbs_api",
      "medium": "http://books.google.com/books/publisher/content?id=ZV2ACgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE73StY4oXWo3-Crxqxt606tljQVbTUTSdlWV2_my59SIUN1tBrpGEtUikfrUSgPKjkhXHcZ_Jw0w40S_tVgCC1L_kkQhSwNTImI8LO8ltd6uqJ8Caqb1O7QCRV-7V_h1BAULjtMV&source=gbs_api",
      "large": "http://books.google.com/books/publisher/content?id=ZV2ACgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73dhZw4_2ddWAN1KXa9-XcVPyVnWt2OGBA6j7IEtanbj5Hs0CWOlPDw1P6cyFOQ5RqKF5XHGpQcgzEpuJLLpMJuF_pLgA1WJ13iCHCoNby_Y5tdiiarDXkSQtpr63IpzDMzGVoC&source=gbs_api",
      "extraLarge": "http://books.google.com/books/publisher/content?id=ZV2ACgAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE73VSIKEaffUm4uFgxghxHxBnY0tD4kNVxw1zivkdjRRSUzS8-BE3p8BvNk8qDeAJfPltjKFQOJJeSc3C5IBfwTkrjrj1_3_gC3Dq9_PfpHLII57vpQspQoXw7VKF79njmecIph1&source=gbs_api"
    },
    "language": "de",
    "previewLink": "http://books.google.ru/books?id=ZV2ACgAAQBAJ&hl=&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=ZV2ACgAAQBAJ&source=gbs_api",
    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=ZV2ACgAAQBAJ"
  },
  "saleInfo": {
    "country": "RU",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
  },
  "accessInfo": {
    "country": "RU",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
      "isAvailable": false
    },
    "pdf": {
      "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=ZV2ACgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
  }
} */
