export const Currencies =[
    { value: "USD", label: "$ Dollar", locale: "en-US" },
    { value: "INR", label: "₹ Rupee", locale: "en-IN" },
    { value: "EUR", label: "€ Euro", locale: "en-EU" },
    { value: "GBP", label: "£ Pound", locale: "en-GB" },
    { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
    { value: "CNY", label: "¥ Yuan", locale: "zh-CN" },
    { value: "AUD", label: "$ Australian Dollar", locale: "en-AU" },
    { value: "CAD", label: "$ Canadian Dollar", locale: "en-CA" },
    { value: "AED", label: "د.إ Dirham", locale: "ar-AE" },
    { value: "SAR", label: "﷼ Riyal", locale: "ar-SA" },
    { value: "QAR", label: "﷼ Qatari Riyal", locale: "ar-QA" },
    { value: "EGP", label: "ج.م Egyptian Pound", locale: "ar-EG" },
    { value: "KWD", label: "د.ك Kuwaiti Dinar", locale: "ar-KW" },
    { value: "OMR", label: "﷼ Omani Rial", locale: "ar-OM" }
];

export type Currency = (typeof Currencies)[0];