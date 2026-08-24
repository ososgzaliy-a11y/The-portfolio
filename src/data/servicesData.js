// ============================================================
//  src/data/servicesData.js
//  All services/expertise card content in one place.
//  To add/edit a service, only touch this file.
// ============================================================

export const servicesData = [
  {
    id: 'web',
    number: '01',
    titleKey: 'srvcWebTitle',
    descKey: 'srvcWebDesc',
    contactParam: 'web',
    iconPath: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>`,
    // Expanded drawer content
    benefitText: 'لو البزنس بتاعك بيكبر ومحتاج سيستم يربط كل حاجة ببعضها من غير ما يقع، إحنا بنبني لك منصة تفصيل على مقاسك. عقل إلكتروني بيوفر وقتك ومجهودك.',
    bullets: [
      'الوصول لعملائك عبر منصة متكاملة.',
      'تحكم كامل في جميع عمليات البيع.',
    ],
  },
  {
    id: 'mobile',
    number: '02',
    titleKey: 'srvcMobileTitle',
    descKey: 'srvcMobileDesc',
    contactParam: 'mobile',
    iconPath: `<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>`,
    benefitText: 'إحنا بنعمل لك تطبيق يشتغل على الآيفون والأندرويد بنعومة وسرعة. تطبيق يخلي تجربة الشراء أسهل ما يمكن، وده بيترجم لمبيعات أكتر.',
    bullets: [
      'الوصول لعملائك بإشعارات مباشرة.',
      'دعم كامل للآيفون والأندرويد.',
    ],
  },
  {
    id: 'uiux',
    number: '03',
    titleKey: 'srvcUiTitle',
    descKey: 'srvcUiDesc',
    contactParam: 'uiux',
    iconPath: `<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>`,
    benefitText: 'التصميم مش بس شكل حلو، التصميم هو إزاي تخلي العميل يثق فيك ويلاقي اللي بيدور عليه بسهولة.',
    bullets: [
      'بناء ثقة فورية مع الزائر.',
      'توجيه العميل لاتخاذ قرار الشراء.',
    ],
  },
  {
    id: 'cloud',
    number: '04',
    titleKey: 'srvcCloudTitle',
    descKey: 'srvcCloudDesc',
    contactParam: 'cloud',
    iconPath: `<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>`,
    benefitText: 'مفيش حاجة بتخسر العميل قد إن الموقع يقع أو يكون بطيء. إحنا بننقل شغلك على سيرفرات سحابية قوية جداً.',
    bullets: [
      'استقرار الموقع حتى وقت الذروة.',
      'حماية بيانات عملائك بأعلى المعايير.',
    ],
  },
];
