var winFeature =
        'location=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes';

let objMedInfo = {
    // antiallergic-----------------------------------------------------------------------------------------------------------------------
    // אנטיהיסטמינים – נוגדי אלרגיה
    "Loratadine-Desloratadine": {
        medType: "antiallergic",
        type : "withoutMechanism",
        pic : "antiallergic/Desloratadine", 
        genericName : "Loratadine-Desloratadine.",
        commercialName : "Allergyx.<br>Aerius.",
        indication : "<ol class=list><li>נזלת אלרגית.</li><li>אורטיקריה (פריחה בצורת משטחים אדומים בולטים בצורות שונות, מלווה בגרד).</li></ol>",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "<ol class=list><li>ישנוניות במינונים גבוהים.</li><li>סחרחורת.</li></ol>",
        patientGuidelines : "<ol class=list><li>שימוש מעבר למינון המקובל עלול לגרום לישנוניות.</li><li>יש לידע את הרופא אם ישנה היסטוריה משפחתית של פרכוסים.</li></ol>",
    },
    "Azelastine": {
        medType: "antiallergic",
        type : "withoutMechanism",
        pic : "antiallergic/optilast", 
        genericName : "Azelastine.",
        commercialName : "Optilast.<br>Astelin.",
        indication : "דלקת עיניים אלרגית.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "<ol class=list><li>ישנוניות (בשימוש דרך האף)</li><li>התקף אסטמה (בשימוש דרך האף, נדיר).</li></ol>",
        patientGuidelines : "<ol class=list><li>לפני שימוש בטיפות עיניים יש להקפיד על שטיפת ידיים.</li><li>בזמן שימוש בטיפות עיניים אין לגעת בפיית הבקבוקון בעין.</li><li>אין לבצע פעולות הדורשות ערנות לאחר שימוש בתרופה דרך האף.</li><li>יש לידע את הרופא אם ישנה היסטוריה משפחתית של פרכוסים.</li></ol>",
    },
    // סטרואידים – מדכאי תגובה חיסונית 
    "Predisone": {
        medType: "antiallergic",
        type : "withoutMechanism",
        pic : "antiallergic/predninsone", 
        genericName : "Predisone.",
        commercialName : "Predisone.",
        indication : "<ol class=list><li>אלרגיה קשה.</li><li>דלקות מפרקים.</li><li>אסתמה.</li><li>חסר הורמונים.</li></ol>",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>זיהומים חמורים ספציפיים (זיהום פטרייתי פעיל).</li></ol>",
        sideEffect : "<ol class=list><li>תופעות נוירולוגיות ופסיכיאטריות (פרכוסים, פסיכוזה, קשיי שינה ועוד..).</li><li>תופעות לבביות (אי ספיקת לב, הפרעות קצב לב, קרישי דם ועוד..).</li><li>תופעות במערכת העיכול (כאבי בטן, כיב קיבה, דלקת בלבלב ועוד..).</li><li>עלייה ברמות סוכר.</li><li>עלייה בלחץ דם.</li><li>הפרעות במאזן מלחים.</li></ol>",
        patientGuidelines : "<ol class=list><li>לא להפסיק את הטיפול בפתאומיות, אלא בהתאם להנחיות רופא בלבד.</li><li>לקחת עם אוכל.</li><li>להיות ערניים לפצעים/זיהומים שאינם מחלימים.</li><li>אין לשתות יין ומשקאות חריפים בזמן הטיפול בתרופה.</li></ol>",
    },
    "Fluticasone-nasal": {
        medType: "antiallergic",
        type : "withoutMechanism",
        pic : "antiallergic/flixonase", 
        genericName : "Fluticasone.",
        commercialName : "Flixonase.",
        indication : "נזלת (אלרגית ולא אלרגית).",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "אין.",
        patientGuidelines : "<ol class=list><li>להימנע מריסוס לעיניים.</li><li>לנער לפני שימוש.</li><li>יש להקפיד על שימוש באופן רציף וקבוע.</li></ol>",
    },
    "Betamethasone-משחה": {
        medType: "antiallergic",
        type : "withoutMechanism",
        pic : "antiallergic/betacorten", 
        genericName : "Betamethasone 0.1%.",
        commercialName : "Betacaroten.",
        indication : "<ol class=list><li>נגעים דלקתיים בעור.</li><li>פסוריאזיס (מחלת עור שמתבטאת בנגעים קשקשיים מרובים).</li></ol>",
        contraindication : "אלרגיה לתרופה ולסטרואידים אחרים.",
        sideEffect : "אין.",
        patientGuidelines : "<ol class=list><li>לשימוש חיצוני בלבד.</li><li>לשטוף ידיים אחרי המריחה.</li><li>יש למרוח שכבה דקה בלי לעסות את אזור המריחה ולהמתין לספיגה.</li><li>שמירה על היגיינת העור.</li><li>להגיע לבדיקת רופא במידה ויש גירוי עור או זיהום משני של העור.</li></ol>",
    },
    "Pseudoephedrine": {
        medType: "antiallergic",
        type : "withMechanism",
        pic : "antiallergic/sinufed", 
        genericName : "Pseudoephedrine.",
        commercialName : "Sinufed.",
        indication : "<ol class=list><li>גודש באף.</li><li>דלקת אוזניים- הפחתת הגודש בצינורות השמע.</li></ol>",
        contraindication : "<ol class=list><li>יתר לחץ דם.</li><li>מחלת לב איסכמית.</li><li>סוכרת.</li><li>פעילות יתר של בלוטת התריס.</li><li>מחלת כליות חמורה.</li></ol>",
        sideEffect : "<ol class=list><li>קשיי שינה, עצבנות.</li><li>פלפיטציות (דפיקות לב).</li></ol>",
        patientGuidelines : "<ol class=list><li>לא מומלץ לקחת שעתיים לפני השינה.</li><li>אין לקחת יותר משבעה ימים.</li><li>יש לשים לב לא לקחת עם תרופות שמכילות את החומר הפעיל: אקמול צינון, דקסמול קולד וכו'.</li></ol>.",
        mechanismOfAction : "כיווץ כלי דם באף ובכך הפחתת גודש.",
    },
    "Oxymetazoline-nasal": {
        medType: "antiallergic",
        type : "withMechanism",
        pic : "antiallergic/otrivine", 
        genericName : "Oxymetazoline.",
        commercialName : "Sinulen.",
        indication : "גודש באף.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>אחרי ניתוח באזור האף/פה/לוע.</li><li>יתר לחץ דם ומחלות לב/ כלי דם אחרות (התרופה גורמת לכיווץ כלי דם ולכן עלולה לגרום לעלייה בלחץ דם).</li></ol>",
        sideEffect : "<ol class=list><li>יובש/צריבה בריריות האף והלוע.</li><li>נדיר – עלייה בלחץ דם ודפיקות לב (התרופה גורמת לכיווץ כלי דם ולכן עלולה לגרום לעלייה בלחץ דם).</li></ol>",
        patientGuidelines : "<ol class=list><li>עד 2 טיפות לכל נחיר, 3 פעמים ביום, במידת הצורך.</li><li>אין להשתמש יותר מ 3 ימים ברצף (עלולה להיווצר תלות פיזיולוגית בתרופה).</li><li>טרם השימוש, לקנח את האף בעדינות</li></ol>",
        mechanismOfAction : "כיווץ נימי דם באף להורדת גודש.",
    },
    // antibiotics-----------------------------------------------------------------------------------------------------------------------
    // אנטיביוטיקה
    "Penicillin-G": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/penicillin", 
        genericName : "Penicillins VK.",
        commercialName : "Rafapen, Pen-Rafa.",
        indication : "דלקת גרון.",
       contraindication : "אלרגיה לתרופה.",
        sideEffect : "<ol class=list><li>כאבי בטן.</li><li>פריחה.</li><li>תגובה אלרגית.</li></ol>",
        patientGuidelines : "<ol class=list><li>לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר.</li><li>מומלץ לקחת אחרי אוכל, על בטן מלאה (כדי להפחית תופעות לוואי במערכת העיכול).</li><li>לפנות לבדיקה רפואית אם מופיעה תגובה אלרגית, גם תגובה אלרגית קלה כמו פריחה.</li><li>להימנע משימוש בזמן מחלת הנשיקה</li></ol>",
        mechanismOfAction : "פגיעה בבניית דופן התא של החיידקים ועל כן הריגה של החיידקים.",
    },
    "Amoxicillin": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/moxypen", 
        genericName : "Amoxicillin.",
        commercialName : "Moxypen.",
        indication : "<ol class=list><li>זיהומים באף אוזן גרון.</il><li>זיהום בדרכי הנשימה.</il></ol>",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "<ol class=list><li>כאבי בטן.</li><li>פריחה.</li><li>תגובה אלרגית.</li></ol>",
        patientGuidelines : "<ol class=list><li>לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר.</li><li>מומלץ לקחת אחרי אוכל, על בטן מלאה (כדי להפחית תופעות לוואי במערכת העיכול).</li><li>לפנות לבדיקה רפואית אם מופיעה תגובה אלרגית, גם תגובה אלרגית קלה כמו פריחה.</li><li>להימנע משימוש בזמן מחלת הנשיקה</li></ol>",
        mechanismOfAction : "פגיעה בבניית דופן התא של החיידקים ועל כן הריגה של החיידקים.",
    },
    "Cephalexin": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/ceforal", 
        genericName : "Cephalexin.",
        commercialName : "Ceforal, Cefovit.",
        indication : "זיהומים בעור.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "<br><ol class=list><li>כאבי בטן.</li><li>פריחה.</li></ol>",
        patientGuidelines : "<ol class=list><li>לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר.</li><li>מומלץ לקחת אחרי אוכל, על בטן מלאה (כדי להפחית תופעות לוואי במערכת העיכול).</li><li>לפנות לבדיקה רפואית אם מופיעה תגובה אלרגית, גם תגובה אלרגית קלה כמו פריחה.</li></ol>",
        mechanismOfAction : "פגיעה בבניית דופן התא של החיידקים ועל כן הריגה של החיידקים.",
    },
    "Cefuroxime": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/zinnat", 
        genericName : "Cefuroxime.",
        commercialName : "Zinnat.",
        indication : "זיהומים בדרכי הנשימה או השתן.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "<br><ol class=list><li>כאבי בטן.</li><li>פריחה.</li></ol>",
        patientGuidelines : "<ol class=list><li>לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר.</li><li>מומלץ לקחת אחרי אוכל, על בטן מלאה (כדי להפחית תופעות לוואי במערכת העיכול).</li><li>לפנות לבדיקה רפואית אם מופיעה תגובה אלרגית, גם תגובה אלרגית קלה כמו פריחה.</li><li>יש לשים לב להתפתחות תופעת לוואי של סחרחורת ולא לנהוג תחת השפעת התרופה עד וידוא כי אין סחרחורת משמעותית.</li></ol>",
        mechanismOfAction : "פגיעה בבניית דופן התא של החיידקים ועל כן הריגה של החיידקים.",
    },
    "Clarithromycin-TAB": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/klaridex", 
        genericName : "Clarithromycin (TAB).",
        commercialName : "Klarin, Klaridex.",
        indication : "<ol class=list><li>ניתנת כחלק מטיפול בהליקובקטר.</li><li>ניתנת לזיהומים בדרכי הנשימה.</li></ol>",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>תפקודי כבד לקויים בעבר עקב תרופה מהמשפחה.</li></ol>",
        sideEffect : "תגובה במערכת העיכול.",
        patientGuidelines : "<ol class=list><li>לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר.</li><li>תמיסה Acnetrim/Acnemycin מיועדת לשימוש חיצוני בלבד, וטרם המריחה יש לשטוף פנים עם מים וסבון ולהמתין לייבוש.</li><li>אין צורך להצמיד את הטיפול לאוכל.</li><li>להגביל אלכוהול</li><li>יש לשתף את הרופא/ה בכל טיפול רפואי שניתן במקביל</li></ol>",
        mechanismOfAction : "עיכוב בניית חלבונים בחיידקים. כתלות במינון נוצרת השפעה של הריגת החיידקים או עצירת התרבותם.",
    },
    "Roxythromycin-TAB": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/rulid", 
        genericName : "Roxythromycin (TAB).",
        commercialName : "Rulid.",
        indication : "מגוון זיהומים חיידקיים",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>תפקודי כבד לקויים בעבר עקב תרופה מהמשפחה.</li></ol>",
        sideEffect : "<ol class=list><li>מערכת העיכול – כאבי בטן, שלשולים ועוד.</li><li>הפרעות בקצב לב.</li><li>פריחה ורגישות מוגברת של העור לשמש.</li></ol>",
        patientGuidelines : "<ol class=list><li>לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר.</li><li>אין הכרח לקחת אחרי האוכל, אבל זה יכול להפחית תופעות לוואי במערכת העיכול.</li><li>לפנות לבדיקה רפואית במקרה של שלשול ממושך (גם בשבועות שאחרי סיום הטיפול) – עלול להעיד על זיהום מסויים במעי הגס הדורש טיפול (CDAD).</li><li>תמיסה Acnetrim/Acnemycin מיועדת לשימוש חיצוני בלבד, וטרם המריחה יש לשטוף פנים עם מים וסבון ולהמתין לייבוש.</li></ol>",
        mechanismOfAction : "עיכוב בניית חלבונים בחיידקים. כתלות במינון נוצרת השפעה של הריגת החיידקים או עצירת התרבותם.",
    },
    "Erythromycin": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/acnetrim", 
        genericName : "Erythromycin.",
        commercialName : "Acnetrim, Acnemycin.",
        indication : "מגוון זיהומים חיידקיים",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>תפקודי כבד לקויים בעבר עקב תרופה מהמשפחה.</li></ol>",
        sideEffect : "<ol class=list><li>מערכת העיכול – כאבי בטן, שלשולים ועוד.</li><li>הפרעות בקצב לב.</li><li>פריחה ורגישות מוגברת של העור לשמש.</li></ol>",
        patientGuidelines : "<ol class=list><li>לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר.</li><li>אין הכרח לקחת אחרי האוכל, אבל זה יכול להפחית תופעות לוואי במערכת העיכול.</li><li>תמיסה Acnetrim/Acnemycin מיועדת לשימוש חיצוני בלבד, וטרם המריחה יש לשטוף פנים עם מים וסבון ולהמתין לייבוש.</li></ol>",
        mechanismOfAction : "עיכוב בניית חלבונים בחיידקים. כתלות במינון נוצרת השפעה של הריגת החיידקים או עצירת התרבותם.",
    },
    "Ofloxacin": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/ofloxacin", 
        genericName : "Ofloxacin.",
        commercialName : "Oflodex.",
        indication : "דלקות בדרכי השתן.",
        contraindication : "<ol class=list><li>אפליפסיה.</li><li>G6PD.</li></ol>",
        sideEffect : "<ol class=list><li>מערכת העיכול – כאבי בטן ועוד.</li><li>תופעות לוואי נוירולוגיות נפוצות (סחרחורות, כאבי ראש, קשיי שינה..) ונדירות (פרכוסים, הזיות, חולשת שרירים...).</li><li>פגיעה כבדית.</li><li>דלקות וקרעים בגידים.</li><li>רגישות מוגברת של העור לשמש.</li><li>דיכוי יצירת תאי דם במח עצם.</li></ol>",
        patientGuidelines : `<ol class=list><li>לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר.</li><li>אין הכרח לקחת אחרי האוכל, אבל זה יכול להפחית תופעות לוואי במערכת העיכול.</li><li>אין לקחת ביחד עם סותרי חומצה וויטמינים.</li><li>להימנע מפעולות הדורשת ערנות וריכוז אחרי לקיחת התרופה (בגלל הסיכון לתופעות לוואי נוירולוגיות).</li><li>מניעה מחשיפה ממושכת לשמש ושימוש בקרם הגנה (התרופה מגבירה רגישות של העור לשמש).</li><li>לפנות לבדיקה רפואית אם מופיעה תגובה אלרגית, גם תגובה אלרגית קלה כמו פריחה. כנ"ל אם מופיעות תופעות לוואי נוירולוגיות משמעותיות.</li><li>במקרה של התקפים של קוצר נשימה, נפיחות בקרסוליים או הופעה של דפיקות לב מהירות יש לעדכן את הרופא/ה</li></ol>`,
        mechanismOfAction : "עיכוב שכפול החומר התורשתי (DNA) של חיידקים, ובכך פוגע בהתרבות החיידקים.",
    },
    "Doxyxycline": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/doxycycline", 
        genericName : "Doxyxycline..",
        commercialName : "Doxylin.",
        indication : "טיפול במחלות שמועברות במגע מיני.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>הריון והנקה (התרופות עלולות לפגוע בעובר באופן בלתי הפיך).</li></ol>",
        sideEffect : "<ol class=list><li>מערכת העיכול – כאבי בטן, שלשולים, פגיעה בריריות למשל בוושט ועוד.</li><li>רגישות מוגברת של העור לשמש.</li><li>שינוי צבע קבוע של השיניים (בעיקר בילדים).</li><li>דיכוי יצירת תאי דם במח עצם.</li><li>אי ספיקת כליות Minocycline)).</li><li>עלייה בלחץ התוך גולגולתי.</li></ol>",
        patientGuidelines : "<ol class=list><li>יש ליטול ולאחר מכן לשתות לפחות שתי כוסות מים, ולא לשכב שעה לאחר הנטילה.</li><li>יש להפריד את הטיפול שעתיים מסותרי חומצה, מוצרי חלב ושלוש שעות מתרופות אחרות.</li><li>להימנע משתיית אלכוהול</li></ol>",
        mechanismOfAction : `עיכוב בניית חלבונים בחיידקים. בד"כ גורמים לעצירת ההתרבות של החיידקים , ולפעמים להריגתם.`,
    },
    "Minocycline": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/minocycline", 
        genericName : "Minocycline.",
        commercialName : "Minocycline.",
        indication : "טיפול לאקנה.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>הריון והנקה (התרופות עלולות לפגוע בעובר באופן בלתי הפיך).</li></ol>",
        sideEffect : "<ol class=list><li>מערכת העיכול – כאבי בטן, שלשולים, פגיעה בריריות למשל בוושט ועוד.</li><li>רגישות מוגברת של העור לשמש.</li><li>שינוי צבע קבוע של השיניים (בעיקר בילדים).</li><li>דיכוי יצירת תאי דם במח עצם.</li><li>אי ספיקת כליות Minocycline)).</li><li>עלייה בלחץ התוך גולגולתי.</li></ol>",
        patientGuidelines : "<ol class=list><li>המנעות מחשיפה לUV.</li><li>כוס מים לפחות, לא לשכב שעה אחרי נטילת הטיפול</li><li>להמתין שלוש שעות מנטילת תרופות אחרות, חלב או סותרי חומצה וויטמין C.</li><li>להימנע מנהיגה - גורם לסחרחורת.</li></ol>",
        mechanismOfAction : `עיכוב בניית חלבונים בחיידקים. בד"כ גורמים לעצירת ההתרבות של החיידקים , ולפעמים להריגתם.`,
    },
    // אנטיביוטיקה - אחר
    "Sulfamethoxazole-Trimethoprim": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/diseptyl", 
        genericName : "Sulfamethoxazole-Trimethoprim.",
        commercialName : "Resprim.<br>Diseptyl.",
        indication : "זיהומים בדרכי השתן.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>אי ספיקת כליות.</li><li>פגיעה בתפקודי כבד.</li><li>אנמיה כתוצאה ממחסור בחומצה פולית.</li></ol>",
        sideEffect : "<ol class=list><li>כאבי בטן, שלשולים.</li><li>פנקראטיטיס – דלקת בלבלב.</li><li>פגיעה כלייתית.</li><li>פגיעה כבדית שמובילה לצהבת.</li><li>דיכוי יצירת תאי דם במח עצם.</li><li>תגובות עוריות כמו פריחה.</li></ol>",
        patientGuidelines : "<ol class=list><li>לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר.</li><li>שתיית מים מרובה.</li><li>לצמצם חשיפה לשמש ולהשתמש בקרם הגנה (התרופה עלולה להגביר את הרגישות של העור לשמש).</li><li>לפנות לבדיקה רפואית במידה ויש פריחה. היא עלולה להעיד על התחלה של אנאפילקסיס או תגובה מסוכנת אחרת לטיפול.</li></ol>",
        mechanismOfAction : "עיכוב ייצור חומצה פולית בחיידקים (חינוי להישרדותם) ובכך גורם להריגתם.",
    },
    "Nifurantin": {
        medType: "antibiotics",
        type : "withoutMechanism",
        pic : "antibiotics/Nifurantin", 
        genericName : "Nifurantin.",
        commercialName : "MACRODANTINE.<br>FURDANTIN ORAL.",
        indication : "דלקת בדרכי השתן.",
        contraindication : "<ol class=list><li>חוסר באנזים g6pd.</li><li>אי ספיקת כליות.</li></ol>",
        sideEffect : "אין.",
        patientGuidelines : "<ol class=list><li>יש להרבות בשתייה.</li><li>יש להקפיד על סיום כל הטיפול, בדגש על משטרי טיפול (מרווחים ומינונים).</li><li>אין לשלב על אלכוהול.</li><li>במידה והמטופלת נוטלת גלולות – יש להנחות על שימוש באמצעי מניעה נוסף.</li></ol>",
    },
    "Mupirocin": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/bactroban", 
        genericName : "Mupirocin.",
        commercialName : "Bactorban CRM.",
        indication : "מגוון זיהומים חיידקיים בעור, כולל אימפטיגו.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>פצעים פתוחים גדולים וכוויות נרחבות.</li></ol>",
        sideEffect : "גירוי מקומי של העור.",
        patientGuidelines : "<ol class=list><li>לשימוש חיצוני בלבד.</li><li>יש להימנע ממגע עם העיינים, במידה והתרופה חדרה לעין יש לשטוף באופן יסודי עם מים זורמים.</li><li>אין להשתמש בתכשירים עוריים אחרים באיזור הטיפול (כולל תכשירים קוסמטיים).</li><li>לחזור לבדיקת רופא במידה ואין שיפור או יש החרמה אחרי 3-5 ימים.</li></ol>",
        mechanismOfAction : "עיכוב בניית חלבונים בחיידקים.",
    },
    "Chloramphenicol": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/synthomycine5", 
        genericName : "Chloramphenicol 3% \ 5%.",
        commercialName : "Synthomycine.",
        indication : "זיהומים חיידקיים בעור או בעיניים.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "גירוי מקומי של העור או העיניים (בעיניים יכול להתבטא בהפרעה לראיה).",
        patientGuidelines : "<ol class=list><li>לשטוף ידיים במים וסבון לפני ואחרי השימוש.</li><li>עיניים – לשים מעט משחה בעין כאשר הראש מוטה אחורנית, ולעצום את העין למשך דקה לפחות בשביל ספיגה מיטבית.</li><li>חבישה אחרי שימוש – לפי הוראות רופא פרטניות.</li></ol>",
        mechanismOfAction : "משחה אנטיביוטית לעור / לעיניים (קיים גם בצורת טיפות עיניים).",
    },
    "Gentamycin": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/lacromycin", 
        genericName : "Gentamycin.",
        commercialName : "Lacromycin טיפות עיניים.",
        indication : "מגוון זיהומים חיידקיים.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "גירוי מקומי של העיניים שמתבטא בגירוד, כאב, הפרעה לראיה וכו'.",
        patientGuidelines : "<ol class=list><li>לשטוף ידיים במים וסבון לפני השימוש.</li><li>לטפטף לעין בזמן שהראש מוטה אחורנית מבלי לגעת בעין עם הבקבוקון.</li><li>לוודא שהראיה תקינה ולא מטושטשת לפני פעולות כמו נהיגה.</li></ol>",
        mechanismOfAction : "טיפות עיניים אנטיביוטיות.",
    },
    // תרופות אנטי-ויראליות
    "Acyclovir": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/zovirax", 
        genericName : " Acyclovir (TAB\CRM).",
        commercialName : "Zovirax.",
        indication : "טיפול ומניעה של פצעי קורב או הרפס באיברי במין.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "<ol class=list><li>כאבי ראש.</li><li>סחרחורת.</li><li>בחילה.</li><li>הקאה.</li><li>תלונות הקשורות למערכת העיכול.</li><li>טיפול מקומי עלול לגרום לעקצוץ, צריבה או אדמומיות באזור המריחה</li></ol>",
        patientGuidelines : "<ol class=list><li>קיים לטיפול חיצוני ולטיפות דרך הפה.</li><li>יש להתחיל את הטיפול בהקדם האפשרי.</li><li>בטיפול דרך הפה - יש להקפיד על צריכת נוזלים רבה.</li><li>במקרה של טיפול בנגעים באיברי המין - יש להימנע מקיום יחסי מין.</li><li>התרופה יכולה לגרום לישנוניות - יש להיזהר עם נהיגה.</li><li>הגבלת כמות שתיית אלכוהול.</li></ol>",
        mechanismOfAction : "עיכוב יצירת חומר תורשתי (DNA) בוירוסים ובכך עיכוב שכפול הוירוסים.",
    },
    // תרופות אנטי-פטרייתיות
    "Clotrimazole-VAG-CRM": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/agisten", 
        genericName : " Clotrimazole (VAG CRM).",
        commercialName : "Agisten (Vag. Tab.).",
        indication : "זיהום פטרייתי בנרתיק.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "גירוי מקומי.",
        patientGuidelines : "<ol class=list><li>זיהומים חוזרים או ממושכים ידרשו בירור רפואי נוסף.</li><li>להימנע מקיום יחסי מין בזמן הטיפול.</li><li>התרופה עלולה להכתים בגדים ועל כן, רצוי להשתמש בפד סופג בתחתון.</li><li>יש להמשיך את הטיפול גם בזמן מחזור.</li><li>לסיים את הטיפול ולא להפסיק באמצע, גם אם מרגישים טוב יותר.</li></ol>",
        mechanismOfAction : "פגיעה בדופן תאי הפטריות ובכך הריגתם או עיכוב התרבותם.",
    },
    "Clotrimazole-CRM": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/clotrimazole", 
        genericName : " Clotrimazole (CRM).",
        commercialName : "Clotrimaderm, Pitrion (CRM).",
        indication : "זיהום פטרייתי עורי.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "גירוי מקומי.",
        patientGuidelines : "<ol class=list><li>שטיפת ידיים לפני ואחרי המריחה.</li><li>לנקות את האזור המזוהם עם מים וסבון לפני השימוש ולהמתין לייבוש לפני מריחת המשחה.</li><li>חבישה – לפי הוראות רופא פרטניות.</li></ol>",
        mechanismOfAction : "פגיעה בדופן תאי הפטריות ובכך הריגתם או עיכוב התרבותם.",
    },
    "Clotrimazole-Neomycin-Dexamethasone": {
        medType: "antibiotics",
        type : "withMechanism",
        pic : "antibiotics/polycutan-tevacutan", 
        genericName : " Clotrimazole + Neomycin + Dexamethasone (CRM).",
        commercialName : "Tevacutan CRM, Polycutan CRM.",
        indication : "זיהום פטרייתי עורי שמשלב זיהום חיידקי.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>זיהום ויראלי בעור למשל הרפס.</li><li>שימוש באוזן החיצונית אסור אם יש קרע בעור התוף.</li></ol>",
        sideEffect : "גירוי מקומי.",
        patientGuidelines : "<ol class=list><li>שטיפת ידיים לפני ואחרי המריחה.</li><li>לנקות את האיזור המזוהם עם מים וסבון לפני השימוש ולהמתין לייבוש לפני מריחת המשחה.</li><li>חבישה – לפי הוראות רופא פרטניות.</li><li>להימנע ממגע של המשחה עם העיניים.</li><li>אסור להשתמש לתקופות ממושכות.</li></ol>",
        mechanismOfAction : "<ol class=list><li>Clotrimazole – השפעה אנטי- פטרייתית.</li><li>Neomycin – השפעה אנטיביוטית.</li><li>Dexamethasone – סטרואידים, השפעה אנטי דלקתית.</li></ol>",
    },
    "Undeceonic-Acid": {
        medType: "antibiotics",
        type : "withoutMechanism",
        pic : "antibiotics/fungmon", 
        genericName : "Undeceonic Acid.",
        commercialName : "Undecyl, Fungimon (אבקה/CRM).",
        indication : "פטרת בכפות הרגליים.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "גירוי מקומי.",
        patientGuidelines : "<ol class=list><li>ניתן להשתמש עד 5 פעמים ביום, לאחר שטיפת כפות הרגליים במים וסבון וייבוש.</li><li>הדרכה בנוגע לשמירה על היגיינה של כפות הרגליים (שטיפה יומית עם מים וסבון, ייבוש גם בין האצבעות וכו').</li></ol>",
    },
    // breathing-----------------------------------------------------------------------------------------------------------------------
    // הרחבת דרכי נשימה
    "Salbutamol-Albuterol": {
        medType: "breathing",
        type : "withoutMechanism",
        pic : "breathing/ventolin-inhaler", 
        genericName : "Salbutamol / Albuterol.",
        commercialName : "Ventolin (נוזל לאינהלציה או משאף)",
        indication : "<ol class=list><li>טיפול ומניעת התקפי אסטמה (המונח הרפואי נקרא ברונכוספאזם, ברונכו = סמפונות, ספאזם = כיווץ).</li><li>הרחבת סימפונות.</li>",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "<ol class=list><li>טאכיקרדיה.</li><li>רעד בידיים.</li></ol>",
        patientGuidelines : "<ol class=list><li>אם המטופל משתמש במספר משאפים – להמתין 2 דקות בין משאף למשאף.</li><li>אם המטופל משתמש גם במשאף סטרואידים יש להשתמש קודם בVentolin וכעבור 5 דקות במשאף סטרואידים (המטרה קודם לגרום להרפייה והרחבה של דרכי הנשימה על מנת למקסם את יעילות המשאף השני).</li></ol>",
    },
    "Ipratropium-Bromide": {
        medType: "breathing",
        type : "withoutMechanism",
        pic : "breathing/aerovent", 
        genericName : "Ipratropium Bromide.",
        commercialName : "aerovent (נוזל לאינהלציה או משאף).",
        indication : "<ol class=list><li>התקפי אסטמה (ביחד עם Ventolin).</li><li>COPD (מחלת ריאות כרונית).</li></ol>",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "<ol class=list><li>יובש בפה ובריריות.</li><li>טשטוש ראיה (במגע עם העיניים).</li></ol>",
        patientGuidelines : "<ol class=list><li>התרופה לבדה לא מספיקה לטיפול בהתקפי אסטמה.</li><li>להימנע ממגע עם העיניים.</li><li>אם המטופל משתמש במספר משאפים – להמתין 2 דקות בין משאף למשאף.</li><li>אם המטופל משתמש גם במשאף סטרואידים יש להשתמש קודם בVentolin וכעבור 5 דקות במשאף סטרואידים (המטרה קודם לגרום להרפייה והרחבה של דרכי הנשימה על מנת למקסם את יעילות המשאף השני).</li></ol>",
    },
    // דיכוי דלקת בדרכי הנשימה 
    "Budesonide": {
        medType: "breathing",
        type : "withoutMechanism",
        pic : "breathing/budecort", 
        genericName : "Budesonide.",
        commercialName : "Budicort (משאף).",
        indication : "טיפול מניעתי (כרוני) לחולי אסטמה.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה ולחלבוני חלב.</li><li>תקופה של החמרה אקוטית משמעותית באסטמה.</li></ol>",
        sideEffect : "<ol class=list><li>גירוי בפה.</li><li>צרידות.</li><li>צמיחה של פטריה על הלשון</il></ol>",
        patientGuidelines : "<ol class=list><li>התרופה לא נועדה לטפל בהתקפי אסטמה.</li><li>שיפור משמעותי נצפה רק אחרי 1-2 שבועות מתחילת הטיפול.</li><li>יש לשטוף את הפה אחרי השימוש במשאף.</li><li>יש להשתמש בתרופה באופן עקבי ולפי הוראת הרופא/ה.</li></ol>",
    },
    "Bromhexine": {
        medType: "breathing",
        type : "withMechanism",
        pic : "breathing/mokes", 
        genericName : "Bromhexine.",
        commercialName : "Movex.",
        indication : "טיפול במצבים בהם יש ליחה צמיגה (צינון, ברונכיטיס ועוד..).",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "בחילות וכאבי בטן.",
        patientGuidelines : "<ol class=list><li>התרופה לא נועדה לשימוש ממושך.</li><li>המשך/הופעה של חום ושיעול לחתי דורש בדיקת רופא על מנת לשלול דלקת ריאות.</li><li>יש להרבות בשתיית מים לצורך הורדת צמיגות הליחה.</li></ol>",
        mechanismOfAction : "מדלל הפרשות בדרכי הנשימה (ככה יותר קל להוציא ליחה באמצעות שיעול).",
    },
    "Codeine": {
        medType: "breathing",
        type : "withoutMechanism",
        pic : "breathing/rekod", 
        genericName : "Codeine.",
        commercialName : "rekod \ codical.",
        indication : "שיעול.",
        contraindication : "<ol class=list><li>אין לשלב עם אלכוהול.</li><li>לא לנשים בהריון או מניקות.</li></ol>",
        sideEffect : "אין.",
        patientGuidelines : "<ol class=list><li>לא ליטול לפני פעילות הדורשת עירנות.</li><li>עלול לגרום לעייפות ועצירות.</li></ol>",
    },
    // chronic-diseases-----------------------------------------------------------------------------------------------------------------------
    // יתר לחץ דם 
    "Amlodipine": {
        medType: "chronicDiseases",
        type : "withMechanism",
        pic : "chronic-diseases/norvasc", 
        genericName : "Amlodipine.",
        commercialName : "Norvasc.<br>Amlodipine Teva.",
        indication : "יתר לחץ דם.<br>תעוקת חזה.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "<ol class=list><li>כאב ראש.</li><li>עייפות.</li><li>ישנוניות.</li><li>סחרחורת.</li><li>בצקת ברגליים.</li></ol>",
        patientGuidelines : "<ol class=list><li>מעקב עצמי אחר הלחץ דם.</li><li>לא להפסיק את התרופה בפתאומיות (כדי לא לגרום לאפקט rebound שיכול להתבטא בלחץ דם גבוה, כאבים בחזה ועוד).</li><li>להימנע משתיית מיץ אשכוליות</li></ol>",
        mechanismOfAction : "הרחבת כלי דם.",
    },
    "Enalapril": {
        medType: "chronicDiseases",
        type : "withMechanism",
        pic : "chronic-diseases/enaladex20",
        genericName : "Enalapril.",
        commercialName : "Enaladex.",
        indication : "<ol class=list><li>יתר לחץ דם.</li><li>אי ספיקת לב.</li></ol>",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>אי ספיקה כלייתית.</li></ol>",
        sideEffect : "<ol class=list><li>ירידת לחץ דם שמתבטאת בסחרחורות, טאכיקרדיה ועוד.</li><li>הפרעה במאזן המלחים בדם.</li><li>חולשה כללית ותשישות</li></ol>",
        patientGuidelines : "<ol class=list><li>מעקב עצמי אחר הלחץ דם.</li><li>שינויי תנוחות איטיים (על מנת למנות צניחה פתאומית של הלחץ דם שתוביל לעלפון).</li><li>לשתות מספיק מים כדי להימנע מהתייבשות.</li></ol>",
        mechanismOfAction : "הרחבת כלי דם + הגברת הפרשה של מים ומלחים בשתן.",
    },
    "Hydrochlorothiazide": {
        medType: "chronicDiseases",
        type : "withoutMechanism",
        pic : "chronic-diseases/disothiazide", 
        genericName : "Hydrochlorothiazide.",
        commercialName : "Disothiazide.",
        indication : "<ol class=list><li>יתר לחץ דם.</li><li>בצקות.</li></ol>",
        contraindication : `<ol class=list><li>אלרגיה לתרופה.</li><li>אנאוריה ( היעדר מתן שתן, פחות מ50 מ"ל ליממה).</li><li>גאוט.</li><li>רמות מלחים נמוכות בדם.</li></ol>`,
        sideEffect : "<ol class=list><li>הפרעה במאזן המלחים בדם.</li><li>תפרחת.</li></ol>",
        patientGuidelines : "<ol class=list><li>מעקב עצמי אחר הלחץ דם.</li><li>שינויי תנוחות איטיים (על מנת למנות צניחה פתאומית של הלחץ דם שתוביל לעלפון).</li><li>לקחת בבוקר או צהריים עם ארוחה.</li><li>להימנע מחשיפה לשמש וקרינה.</li><li>בחשיפה לשמש יש להקפיד על לבוש ארוך ומקדם הגנה.</li></ol>",
    },
    // יתר שומנים בדם (היפרליפידיה) 
    "Simvastatin": {
        medType: "chronicDiseases",
        type : "withoutMechanism",
        pic : "chronic-diseases/simvastatin",  
        genericName : "Simvastatin.",
        commercialName : "Simvacor.<br>Simvaxon.<br>Simvastatin Teva.",
        indication : "<ol class=list><li>להפחית טרשת עורקים.</li><li>רמת כולסטרול/שומנים גבוהה בדם.</li><li>הפחתת סיכון לתמותה כתוצאה ממחלת לב וכלי דם.</li></ol>",
        contraindication : "<ol class=list><li>טיפולים תרופתיים שונים - יש לדווח לרופא על טיפול תרופתי נוסף טרם התחלת הטיפול.</li></ol>",
        sideEffect : "<ol class=list><li>פירוק רקמת שריר.</li><li>אי ספיקה כלייתית.</li><li>פגיעה בכבד.</li></ol>",
        patientGuidelines : "<ol class=list><li>לקחת בערב (עיקר ייצור הכולסטרול בגוף מתקיים בשעות הלילה).</li><li>שמירה על אורח חיים בריא – תזונה נכונה, פעילות גופנית ועוד...</li></ol>",
    },
    // אנמיה
    "Ferrous-Calcium-Citrate": {
        medType: "chronicDiseases",
        type : "withoutMechanism",
        pic : "chronic-diseases/Ferocal", 
        genericName : "Ferrous Calcium Citrate.",
        commercialName : "ferrocal.",
        indication : "טיפול ומניעה של אנמיה ממחסור בברזל.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>כיב בקיבה.</li><li>חסימת מעיים/ בעיות אחרות במעיים.</li></ol>",
        sideEffect : "כאבי בטן ועצירות/שלשולים.",
        patientGuidelines : "<ol class=list><li>מומלץ לקחת על בטן ריקה אבל אם התרופה גורמת לכאבי בטן אז אפשרי לקחת עם אוכל.</li><li>מיצי פירות העשירים בוויטמין C משפרים את ספיגת התרופה.</li><li>אסור לקחת ביחד עם מוצרי חלב (להמתין שעתיים לפחות).</li><li>טרם נטילת הטיפול נדרש להשלים בדיקת דם לבירור סיבת האנמיה./</li></ol>",
    },
    "Folic-Acid-VitaminB9": {
        medType: "chronicDiseases",
        type : "withoutMechanism",
        pic : "chronic-diseases/polic-acid", 
        genericName : "Folic Acid (Vitamin B9).",
        commercialName : "Folic Acid.",
        indication : "<ol class=list><li>תוסף תזונה.</li><li>טיפול ומניעה של אנמיה כתוצאה ממחסור בחומצה פולית.</li><li>תוסף תזונתי בזמן הריון (מניעת מומים מולדים).</li></ol>",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "אין.",
        patientGuidelines : "אסור לקחת ביחד עם תרופות נוגדות/סותרות חומצה (כמו רני).",
    },
    // דילול דם
    "Acetylsalicylic-Acid": {
        medType: "chronicDiseases",
        type : "withoutMechanism",
        pic : "chronic-diseases/aspirin-cardio",
        genericName : "Acetylsalicylic Acid.",
        commercialName : "Aspirin.",
        indication : "<ol class=list><li>אוטם בשריר הלב (MI).</li><li>טיפול מניעתי בחולים עם מחלות לב וכלי דם.</li><li>אירוע מוחי חסימתי (CVA) או אירוע מוחי חולף (TIA).</li><li>מניעת אירוע מוחי.</li><li>אחרי ניתוח לב פתוח, צינתור, ניתוח עורקים קרוטידים.</li></ol>",
        contraindication : "אי ספיקת כבד או כליה.",
        sideEffect : "<ol class=list><li>בחילות והקאות</li><li>כאבי בטן.</li><li>שלשול.</li><li>צרבת.</li><li>דימום.</li><li>כיבים.</li><li>דלקת במערכת העיכול.</li></ol>",
        patientGuidelines : "<ol class=list><li>הקפדה יתרה על תזונה דלת מלח במטופלים האמורים להימנע מצריכת מלח משום שהתרופה מכילה המון נתרן.</li><li>לא ללעוס או לרסק את הטבליות.</li><li>אסור לשתות אלכוהול בסמוך לטיפול (שעתיים לפני ושעה אחרי).</li><li>לא להפסיק את הטיפול בלי הנחיה רפואית.</li><li>להיות ערניים לסימנים של דימומים במערכות שונות בגוף.</li><li>מומלץ להשתמש במברשת שיניים רכה ומכונת גילוח חשמלי על מנת למנוע דימום.</li><li>שתיית מים מרובה.</li></ol>",
    },
    // digestion-----------------------------------------------------------------------------------------------------------------------
    // סותרי חומצה 
    "Omeprazole": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/omepradex", 
        genericName : "Omeprazole.",
        commercialName : "Omepra.<br>Omepradex.",
        indication : "<ol class=list><li>צרבת.</li><li>דלקת בוושט.</li><li>כיב בקיבה/תריסריון.</li><li>מחלות אחרות שמתבטאות בהפרשת יתר של חומצה בקיבה .</li><li>זיהום חיידקתי בקיבה על ידי Helicobacter Pylori.</li></ol>",
        contraindication : "<ol class=list><li>טיפול תרופתי נגד HIV</li><li>בעיות בליעה, הקאה או צואה שמכילה דם</li></ol>",
        sideEffect : "<ol class=list><li>עצירות.</li><li>שלשול.</li><li>בחילה.</li><li>כאבי בטן.</li><li>הקאה.</li><li>גזים.</li></ol>",
        patientGuidelines : "<ol class=list><li>לא ללעוס או לרסק טבליות.</li><li>לקחת 30-60 דקות לפני ארוחה, על בטן ריקה.</li><li>בשימוש ממושך נדרש לעקוב אחרי רמות מגנזיום ורמות B12</li></ol>",
        mechanismOfAction : "עיכוב הפרשת חומצה מתאים בדופן הקיבה.",
    },
    "Calcium-Magnesium-Carbonate": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/rennie", 
        genericName : "<ol class=list><li>Calcium + Magnesium Carbonate.</li><li>תקן 15 – תרופה בסמכות חובש.</li></ol>",
        commercialName : "rennie.",
        indication : "<ol class=list><li>צרבת.</li><li>מצבים אחרים של חומציות יתר בקיבה .</li><li>הפרעות מסויימות במאזן נוזלים.</li></ol>",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>אי ספיקת כליות.</li></ol>",
        sideEffect : "<ol class=list><li>שלשולים או עצירות.</li><li>הפרעות במאזן המלחים.</li></ol>",
        patientGuidelines : "טבליות למציצה ולא נועדו ללעיסה/בליעה<br.אפשר ליטול טבלית כל 3 שעות במידת הצורך.",
        mechanismOfAction : "סתירת תוכן הקיבה החומצי באופן ישיר והפיכתו לבסיסי יותר.",
    },
    // נוגדי הקאה 
    "Metoclopramide": {
        medType: "digestion",
        type : "withoutMechanism",
        pic : "digestion/pramin", 
        genericName : "Metoclopramide.",
        commercialName : "Pramin.",
        indication : "<ol class=list><li>החזר קיבתי ושטי .</li><li>טיפול ומניעה לבחילות והקאות .</li><li>ריקון קיבה איטי מדי (לרוב קורה בגלל פגיעה עצבית).</li></ol>",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>פרכוסים ו/או תנועות לא רצוניות של שרירי הפנים .</li><li>פיאוכרומוציטומה – גידול בבלוטת יותרת הכליה .</li><li>דימום או חסימה במערכת העיכול.</li></ol>",
        sideEffect : "<ol class=list><li>פרכוסים ו/או תנועות לא רצוניות של שרירי הפנים .</li><li>הפרעות בקצב לב .</li><li>דיכוי ייצור תאי דם במח העצם.</li><li>לא נפוצות - תנועות לא רצוניות (לא רק של הפנים).</li></ol>",
        patientGuidelines : "<ol class=list><li>יש לקחת חצי שעה לפני ארוחה על בטן ריקה ו/או לפני השינה .</li><li>מומלץ שלא לבצע פעולות הדורשות ערנות שעתיים אחרי נטילת התרופה (התרופה עלולה לגרום לישנוניות ותופעות נוירולוגיות אחרות).</li><li>אין לשתות אלכוהול במקביל לטיפול.</li><li>אין לשתות אלכוהול.</li><li>אין להשתמש בתרופה זו לתקופה ארוכה</li></ol>",
    },
    // משלשלים
    "Bisacodyl": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/laxadin", 
        genericName : "Bisacodyl.",
        commercialName : "Laxadin.",
        indication : "<ol class=list><li>עצירות.</li><li>ריקון מעי לפני בדיקות, ניתוחים וכו...</li></ol>",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>דימום ממערכת העיכול.</li><li>חסימת מעיים .</li><li>בחילות/הקאות.</li><li>כאבי בטן חזקים</li><li>כאבי בטן מלווים בהקאות, בחילות או דלקת במעי.</li></ol>",
        sideEffect : "<ol class=list><li>חוסר נוחות בטנית.</li><li>חוסר נוחות בפי הטבעת.</li><li>שלשול.</li><li>בחילה.</li><li>דימום בצואה.</li></ol>",
        patientGuidelines : "<ol class=list><li>לא לקחת בסמוך לצריכת מוצרי חלב (חלב יגרום להתמוססות מהירה של התרופה ותופעות לוואי חמורות יותר).</li><li>אין ליטול יותר מחמישה ימים ברצף.</li><li></li></ol>",
        mechanismOfAction : "הגברת תנועתיות במעי הגס והאצת הריקון.",
    },
    "Sodium-Phoshate-PR": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/fleet", 
        genericName : "Sodium Phoshate.",
        commercialName : "Fleet Enema.",
        indication : "<ol class=list><li>עצירות קשה.</li><li>ריקון מעי לפני בדיקות, ניתוחים וכו...</li></ol>",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>דלקות חמורות במעי הגס .</li><li>דימום ממערכת העיכול.</li><li>חסימת מעיים .</li><li>בחילות/הקאות.</li></ol>",
        sideEffect : "<ol class=list><li>שלשולים .</li><li>כאבי בטן.</li><li>הפרעות במאזן המלחים.</li></ol>",
        patientGuidelines : "לאחר החדרת החוקן יש להתאפק לפחות 5-10 דקות לפני ריקון בשירותים.",
        mechanismOfAction : "ספיחת נוזלים לחלל המעי וריכוך תוכן מעי.",
    },
    "Parrafin": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/liquid-parafin", 
        genericName : "<ol class=list><li>Parrafin.</li><li>תקן 15 – תרופה בסמכות חובש.</li></ol>",
        commercialName : "Parrafin.",
        indication : "עצירות.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>דלקות במעי לרבות אפנדציטיס (דלקת בתוספתן) ודלקת במעי הגס .</li><li>קושי בבליעה (סכנת אספירציה).</li><li>חסימת מעיים .</li><li>בחילות/הקאות.</li></ol>",
        sideEffect : "<ol class=list><li>שלשולים .</li><li>כאבי בטן.</li></ol>",
        patientGuidelines : "<ol class=list><li>יש לקחת שעה לפני האוכל או שעתיים אחרי ארוחה, על בטן ריקה .</li><li>התרופה לא נועדה לשימוש ממושך מעל לשבוע.</li><li>ניתן לתת עד פעמיים ביום, 2 כפיות בכל פעם.</li></ol>",
        mechanismOfAction : "ריכוך הצואה באמצעות ספיחת מים ומניעת ספיגת מים מהמעי לדם.",
    },
    // נוגדי שלשול
    "Loperamide": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/imodiom", 
        genericName : "Loperamide.",
        commercialName : "Stopit.<br>Imodium.",
        indication : "שלשולים.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>עצירות .</li><li>שלשול המלווה בחום גבוה.</li><li>שלשול דמי או שלשול כתופעת לוואי של אנטיביוטיקה.</li></ol>",
        sideEffect : "<ol class=list><li>עצירות ובחילות .</li><li>כאבי בטן.</li></ol>",
        patientGuidelines : "<ol class=list><li>שתיית מים מרובה ותזונה ייעודית (יבשה, דלת סיבים).</li><li>התרופה לא נועדה לשימוש ממושך .</li><li>להתחיל מנטילת 2 קפסולות/טבליות באופן מיידי ואחת נוספת אחרי כל שלשול נוסף עד 4 סך הכל.</li></ol>",
        mechanismOfAction : "האטת ריקון המעי הגס באמצעות האטה התנועתיות.",
    },
    // אחר
    "Papaverine": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/stopit", 
        genericName : "Papaverine Hydrochloride.",
        commercialName : "Papaverine.",
        indication : "כאבים הנובעים מעוויתיות בדרכי העיכול, שתן ומרה.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>הפרעות בקצב לב / רקע של אוטם בלב .</li><li>לחץ תוך גולגלתי מוגבר.</li></ol>",
        sideEffect : "<ol class=list><li>עצירות, בחילה,הקאה או שלשול .</li><li>ירידת לחץ דם שמתבטאת בסחרחורות, עילפון ועוד...</li><li>הפרעות בקצב הלב, טאכיקרדיה.</li></ol>",
        patientGuidelines : "<ol class=list><li>מומלץ לקחת אחרי ארוחה, על בטן מלאה .</li><li>להיזהר בשינויי תנוחות ופעולות הדורשות ערנות וריכוז (התרופה עלולה להוריד לחצי דם).</li></ol>",
        mechanismOfAction : "הרפיית שרירים והפסקת עוויתיות בדרכי העיכול, דרכי השתן, דרכי המרה וכלי דם.",
    },
    "Benzocaine-Bismuth-Zinc": {
        medType: "digestion",
        type : "withMechanism",
        pic : "digestion/rectozoirn", 
        genericName : "Benzocaine + Bismuth + Zinc.",
        commercialName : "Rectozorin (משחה או נרות).",
        indication : "טחורים.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>דימום או פצע פתוח.</li></ol>",
        sideEffect : "גירוי מקומי של העור.",
        patientGuidelines : "<ol class=list><li>יש למרוח כל בוקר וערב ובנוסף אחרי כל יציאה .</li><li>במידה ומופיע דימום יש להפסיק למרוח ולפנות לבדיקת רופא.</li><li>התרופה אינה מיעודת לשימוש ממושך או בתדירות גבוהה.</li><li>במקרה שהנר רך מדי, ניתן להכניס למקרר ל30 דקות.</li><li>חשוב! יש להקפיד על דיאטה מאוזנת וכמות נוזלים מספקת להצלחת הטיפול.</li></ol>",
        mechanismOfAction : "שיכוך כאבים וגרד הנובעים מטחורים, באופן מקומי (Benzocaine  הינו חומר אלחוש מקומי כמו לידוקאין).",
    },
    // painkillers-----------------------------------------------------------------------------------------------------------------------
    // שיכוך כאבים כללי 
    "Paracetamol": {
        medType: "painkillers",
        type : "withoutMechanism",
        pic : "painkillers/acamol", 
        genericName : "Paracetamol.",
        commercialName : "Acamol, Dexamol.<br>Acamol Focus, Exidol.",
        indication : "<ol class=list><li>כאבים קלים/בינוניים.</li><li>חום.</li></ol>",
        contraindication : "<ol class=list><li>אלרגיה לתרופה .</li><li>בעיה בתפקודי כבד.</li></ol>",
        sideEffect : "אין.",
        patientGuidelines : `<ol class=list><li>אסור לשתות אלכוהול במקביל לטיפול .</li><li>ניתן לקחת 1-2 כדורים ( 500-1000 מ"ג) כל 4-6 שעות, במידת הצורך.</li><li>יש לשים לב שלא ליטול בנוסף לתרופות בעלות שם אחר המכילות פרצטמול (דקסמול, נובימול, מוסקול).</li><li>אין לקחת יותר משמונה כדורים (4 גרם ביממה).</li></ol>`,
    },
    "Dipyrone": {
        medType: "painkillers",
        type : "withoutMechanism",
        pic : "painkillers/optalgin", 
        genericName : "Dipyrone.",
        commercialName : "Optalgin.",
        indication : "<ol class=list><li>כאב בינוני עד קשה.</li><li>כאבי ראש.</li><li>כאבי מחזור.</li><li>כאבי שיניים.</li><li>הורדת חום - במקרה שאמצעים אחרים לא הועילו.</li></ol>",
        contraindication : "<ol class=list><li>אלרגיה לתרופה .</li><li>דיכוי מח עצם - תופעה מאוד נדירה.</li></ol>",
        sideEffect : "דיכוי מח עצם (בעיקר בטיפול ממושך).",
        patientGuidelines : "<ol class=list><li>התרופה לא מומלצת לשימוש ממושך .</li><li>ניתן לקחת 1-2 כדורים כל 6-8 שעות, במידת הצורך.</li><li>נדרש לפנות לרופא במקרה של חום מעל שלושה ימים או כאב מעל שבעה ימים.</li></ol>",
    },
    // שיכוך כאבים + השפעה אנטי דלקתית  
    "Iburofen": {
        medType: "painkillers",
        type : "withoutMechanism",
        pic : "painkillers/ibuprofen-ibufen", 
        genericName : "Iburofen.",
        commercialName : "Ibufen.<br>Atrofen.<br>Advil.<br>Nurofen.<br>Adex.<br>Iboo.",
        indication : "<ol class=list><li>במינונים נמוכים - לשיכוך כאבים שונים (כאב ראש, כאבי גב ושרירים, כאבי שיניים או כאבי מחזור).</li><li>במינונים גבוהים - משמש כנוגד דלקת למחלות דלקתיות שונות.</li></ol>",
        contraindication : "<ol class=list><li>אלרגיה לתרופה .</li><li>אי ספיקת כליות.</li><li>כיב בקיבה.</li><li>התייבשות.</li></ol>",
        sideEffect : "<ol class=list><li>כאבי בטן (פגיעה ברירית הקיבה).</li><li>אי ספיקת כליות.</li><li>שלשול.</li><li>נמנום.</li><li>סחרחורת.</li><li>דימום ממערכת העיכול.</li></ol>",
        patientGuidelines : "<ol class=list><li>מומלץ לקחת לאחר ארוחה .</li><li>אין בעיה לשלב עם אלכוהול.</li><li>ניתן לבלוע כדור כל 4-6 שעות, במידת הצורך.</li><li>אין לקחת יותר מ-3 טבליות ביום, 1.2 גרם.</li></ol>",
    },
    // שיכוך כאבים + הרפיית שרירים 
    "Paracetamol-Orphenadrine": {
        medType: "painkillers",
        type : "withoutMechanism",
        pic : "painkillers/muscol", 
        genericName : "Paracetamol(פרצטמול)+ Orphenadrine(חומר המרפה שריר).",
        commercialName : "Muscol.",
        indication : "כאבי שרירים.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה .</li><li>בעיה בתפקודי כבד.</li><li>גלאוקומה.</li><li>מחלה בוושט.</li><li>חסימת מעי.</li><li>חסימת דרכי השתן.</li><li>חולשת שרירים חמורה.</li><li>בלוטת ערמונית מוגדלת.</li></ol>",
        sideEffect : "יובש בפה.",
        patientGuidelines : "<ol class=list><li>אין לקחת תרופה אחרת המכילה Paracetamol (כגון אקמול/דקסמול) במהלך הטיפול .</li><li>אסור לשתות אלכוהול במהלך הטיפול  .</li><li>אין לקחת לפני פעולות הדורשות ערנות למשל נהיגה (התרופה עלולה לגרום לעייפות ו/או חולשת שרירים).</li><li>במידה ואין שיפור במצב בתוך 5 ימים, יש לשוב לרופא/ה המטפל/ת.</li></ol>",
    },
    "Radian-B-Tiger-Balm-Deep-Heat": {
        medType: "painkillers",
        type : "withoutMechanism",
        pic : "painkillers/radian-b", 
        genericName : "אין חומר פעיל ספציפי.",
        commercialName : "Radian B.<br>Tiger Balm.<br>Deep Heat.",
        indication : "כאבי שרירים ו/או פרקים.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "אין.",
        patientGuidelines : "<ol class=list><li>אין למרוח באזורים עם עור עדין כגון מפשעה, פנים וכו'....</li><li>יש למרוח שכבה דקה ולהמתין לספיגה מבלי לעסות את האיזור .</li><li>ניתן למרוח 3-4 פעמים ביום, במידת הצורך.</li></ol>",
    },
    "Phenazopyridine": {
        medType: "painkillers",
        type : "withoutMechanism",
        pic : "painkillers/sedural", 
        genericName : "Phenazopyridine.",
        commercialName : "Sedural.",
        indication : "שיכוך כאבים הנובעים מדלקת בדרכי השתן או פרוצדורה פולשנית בדרכי השתן.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה .</li><li>חסר בG6PD.</li><li>אי ספיקת כליות.</li><li>אי ספיקת כבד או דלקת בכבד.</li><li>דלקת שעלתה לאגן הכליה/ לכליה.</li></ol>",
        sideEffect : "צביעת נוזלי גוף בכתום.",
        patientGuidelines : "<ol class=list><li>התרופה נותנת גוון כתום לשתן ולנוזלי גוף אחרים.</li><li>מומלץ להרבות בשתיית מים ( הערה – שתיית מים מרובה מקלה על הכאבים הנובעים מדלקת בדרכי השתן, אבנים בכליות וכו...</li></ol>",
    },
    "Benzocaine-Thyrotrycine": {
        medType: "painkillers",
        type : "withMechanism",
        pic : "painkillers/strepsils", 
        genericName : "<ol class=list><li>Benzocaine + Thyrotrycine.</li><li>תקן 15 – תרופה בסמכות חובש.</li></ol>",
        commercialName : "Lemosin.<br>Strepsils.",
        indication : "כאבי גרון/דלקת גרון.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "אין.",
        patientGuidelines : "<ol class=list><li>ניתן ליטול טבליה אחת כל 4 שעות, במידת הצורך.</li><li>הטבליות למציצה ולא לבליעה/לעיסה.</li></ol>",
        mechanismOfAction : "שיכוך כאבי גרון באמצעות אלחוש וחיטוי מקומי.",
    },
    "Bismuth-Subsalicylate": {
        medType: "painkillers",
        type : "withMechanism",
        pic : "painkillers/kalbeten", 
        genericName : "Bismuth Subsalicylate.",
        commercialName : "Kalbeten.",
        indication : "<ol class=list><li>שלשול.</li><li>צרבת.</li><li>בחילה.</li><li>גזים.</li><li>כאבי בטן</li><li>קלקול קיבה</li></ol>",
        contraindication : "<ol class=list><li>אלרגיה לתרופה.</li><li>מחלת חום.</li><li>דימום ממערכת העיכול.</li><li>כיב קיבה.</li></ol>",
        sideEffect : "תופעות לוואי שכיחות - עצירות ושינוי בצבע הצואה.",
        patientGuidelines : "<ol class=list><li>ניתן לבלוע כדור כל 3 שעות, במידת הצורך.</li><li>במידה ואין שיפור בתסמינים בתוך יומיים, יש להיבדק על ידי רופא.</li><li>מינון מקסימלי - עד 8 מנות ביממה.</li></ol>",
        mechanismOfAction : "<ol class=list><li>הפחתת כאבי בטן (דיכוי תהליך דלקתי בדרכי העיכול).</li><li>הפחתת שלשולים (הפחתת תנועתיות של המעיים).</li></ol>",
    },
    "Tetracaine-Phenazone": {
        medType: "painkillers",
        type : "withMechanism",
        pic : "painkillers/otidin", 
        genericName : "Tetracaine + Phenazone.<br>Anaesthetic.",
        commercialName : "Otidin.",
        indication : "כאבי אוזניים/ דלקות אוזניים.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה .</li><li>קרע בעור התוף.</li></ol>",
        sideEffect : "אין.",
        patientGuidelines : "<ol class=list><li>ניתן לטפטף טיפה לאוזן בכל שעה, במידת הצורך ולהטות את הראש הצידה למספר דקות לאחר הטפטוף.</li><li>התרופה לא מיועדת לשימוש ארוך טווח מעבר ל2-3 ימים.</li></ol>",
        mechanismOfAction : "<ol class=list><li>Tetracaine  הינו חומר להרדמה/אלחוש מקומי .</li><li>Phenazone הינו חומר משכך כאב ונוגד-דלקת מקבוצת NSAID.</li></ol>",
    },
    // other-meds-----------------------------------------------------------------------------------------------------------------------
    "Petroleum-Gel": {
        medType: "otherMeds",
        type : "withMechanism",
        pic : "other-meds/vaseline", 
        genericName : "Petroleum.",
        commercialName : "Vaseline.",
        indication : "יובש בעור או בשפתיים.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "גירוי מקומי של העור.",
        patientGuidelines : "למרוח על האזור הרלוונטי עד 4 פעמים ביום.",
        mechanismOfAction : "שימון וסיכוך.",
    },
    "Zinc-Oxide-Iron-Oxide": {
        medType: "otherMeds",
        type : "withMechanism",
        pic : "other-meds/calamine", 
        genericName : "Zinc Oxide + Iron Oxide.",
        commercialName : "Calamine (תמיסה).",
        indication : "גירוי עור מקומי על ידי עקיצות קלות ותגובות אלרגיות קלות.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה .</li><li>פצעים וחתכים פתוחים / כוויות.</li></ol>",
        sideEffect : "גירוי מקומי של העור.",
        patientGuidelines : "למרוח על האזור הרלוונטי עד 6 פעמים ביום ולהמתין לייבוש.",
        mechanismOfAction : "הרגעת עור מגורה באמצעות ייבוש והפחתת גרד.",
    },
    "Cetomacrogol-CRM": {
        medType: "otherMeds",
        type : "withMechanism",
        pic : "other-meds/cetomag", 
        genericName : "Cetomacrogol.",
        commercialName : "Cetomag.<br>Dermacol.",
        indication : "עור יבש.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "גירוי מקומי של העור.",
        patientGuidelines : "<ol class=list><li>למרוח על האזור הרלוונטי במידת הצורך.</li><li>אין למרוח על עור פצוע.</li></ol>",
        mechanismOfAction : "שמירה על לחות העור.",
    },
    "Benzoyl-Peroxide-Gel": {
        medType: "otherMeds",
        type : "withMechanism",
        pic : "other-meds/benzac", 
        genericName : "Benzoyl Peroxide.",
        commercialName : "Benzoyl.<br>Peroxide.",
        indication : "טיפול באקנה בינוני עד קל.",
        contraindication : "<ol class=list><li>אלרגיה לתרופה .</li><li>פצעים חמורים והצטלקויות חמורות.</li></ol>",
        sideEffect : "גירוי מקומי של העור.",
        patientGuidelines : "<ol class=list><li>למרוח פעמיים ביום אחרי שטיפת פנים עם מים וסבון .</li><li>אין למרוח על עור פצוע.</li></ol>",
        mechanismOfAction : "<ol class=list><li>פעילות אנטי-חיידקית מקומית.</li><li>הפחתת שומניות העור באופן מקומי.</li></ol>",
    },
    "Tertinoin-CRM": {
        medType: "otherMeds",
        type : "withMechanism",
        pic : "other-meds/retavit", 
        genericName : "Tertinoin.",
        commercialName : "Retavit.",
        indication : "טיפול ומניעה של פצעי בגרות (Acne).",
        contraindication : "<ol class=list><li>אלרגיה לתרופה .</li><li>עור פצוע .</li><li>הריון/הנקה (כולל תכנון הריון) (תרופות המכילות/נגזרות של ויטמין A מגבירות סיוכיים למומים מולדים בעובר.</li></ol>",
        sideEffect : "<ol class=list><li>גירוי מקומי של העור.</li><li>שינוי בצבע העור .</li><li>רגישות מוגברת של העור לשמש.</li></ol>",
        patientGuidelines : "<ol class=list><li>מריחה לפי הוראות הרופא לאחר שטיפת פנים עם מים וסבון .</li><li>אין למרוח על עור פצוע .</li><li>יש להשתמש באמצעי מניעה בזמן קיום יחסי מין.</li><li>צמצום חשיפה לשמש ושימוש בקרם הגנה (התרופה מגבירה את רגישות העור לשמש).</li><li>יש לשטוף את הפנים לפני יציאה לשמש בבוקר.</li></ol>",
        mechanismOfAction : "נגזרת של ויטמין A (מונעת חסימה של תעלות שערה בעור ובכך מפחיתה פצעי בגרות).",
    },
    // "med-name-6": { דוגמא לאובייקט של ת.ז שלא מופיע בו מנגנון הגנה
    //     type : "withoutMechanism",
    //     pic : "other-meds/pitrion", 
    //     genericName : "check",
    //     commercialName : "check",
    //     indication : "",
    //     contraindication : "",
    //     sideEffect : "check",
    //     patientGuidelines : "check",
    // },
    // "med-name-7": { דוגמא לאובייקט של ת.ז שמופיע בו מנגנון הגנה
    //     type : "withMechanism",
    //     pic : "other-meds/pitrion", 
    //     genericName : "check",
    //     commercialName : "check",
    //     indication : "",
    //     contraindication : "",
    //     sideEffect : "check",
    //     patientGuidelines : "check",
    //     mechanismOfAction : "check",
    // },
};

let objMedsShelfsColors = {//צבע, מספר מדפים, כותרת
    antiallergic : ["pink", 3, "נוגדי אלרגיה"], 
    antibiotics : ["darkGreen", 4, "אנטיביוטיקה"], 
    breathing : ["orange", 3, "נשימה"],
    chronicDiseases : ["teal", 4, "מחלות כרוניות"],
    digestion : ["yellow", 5, "עיכול"],
    painkillers : ["purple", 4, "משככי כאבים"],
    otherMeds : ["lightGreen", 1, "תרופות אחרות"],
}

// varubal
let strCurrentMedType;
let strMedTypeFromSearch;
let strcurrentPage = "homePage";
let bSearchScreen = false;
let QUESTIONS = [];

/* loading function
--------------------------------------------------------------
Description: */
window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("fade");
    // place listeners on search button, about button and med buttons
    document.querySelector('.searchButton').addEventListener('click', onClickSearch);
    document.querySelector('.aboutButton').addEventListener('click', onClickAbout);
    let arrMedsButtons = document.querySelectorAll('.mainPageButton');
    for (let i = 0; i < arrMedsButtons.length; i++) {
        arrMedsButtons[i].addEventListener('click', creatMedShelfs);
    };
    document.querySelector(`.testButton`).addEventListener("click", onClickExam);
});

/* onClickAbout
--------------------------------------------------------------
Description: Adds about page */
const onClickAbout = () => {
    // מראה דף אודות ומעלים כפתור אודות ודף בית 
    document.querySelector('.aboutPage').classList.remove("hidden");
    document.querySelector('.aboutButton').classList.add("hidden");
    document.querySelector('.homePageButtons').classList.add("hidden");
    // משנה את התמונה של הכפתור העליון
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    strcurrentPage = "aboutPage"
}

/* onClickSearch
--------------------------------------------------------------
Description: Adds search box and listener to input */
const onClickSearch = () => {
    if (strcurrentPage === "aboutPage") {
        sendToHomePage();
    } else if (strcurrentPage === "practicePage") {
        if(strClickedPracticeQuestion !== undefined) {
            // מוריד סימונים מהשאלות
            if (QUESTIONS[currentQuestion][`correctAns`] !== strClickedPracticeQuestion) {
                document.querySelector(`.practicePage .${strClickedPracticeQuestion} div`).classList.remove("wrongAnswer");
            }
            document.querySelector(`.${QUESTIONS[currentQuestion][`correctAns`]} div`).classList.remove("correctAnswer");
            document.querySelector(`.practiceQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        }
            // משנה צבע של כפתור בדיקה ושל ריבועי התשובות
            document.querySelector(`.practiceBottomButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.ans${i} img`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
            }
            // משנה חזרה כפתור בדיקה
            document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/check_button.svg");
        currentQuestion = 0;
        creatMedShelfs();
    } else if (strcurrentPage === "examPrePage" || strcurrentPage === "endOfTest") {
        sendToHomePage();
    } else if (strcurrentPage !== "medId") {
        // מראה את תיבת החיפוש
        document.querySelector('.searchBoxHolder').classList.remove("hidden");
        document.querySelector('.searchBox').classList.remove("hidden");
        // מעלים כותרת וכפתורים ומשנה גל
        document.querySelector('.title').classList.add("hidden");
        document.querySelector('.aboutButton').classList.add("hidden");
        document.querySelector('.medTypeSymbol').classList.add("hidden");
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/search-wave.svg");
        // הופך את המסך לשחור
        document.querySelector('.searchScren').classList.add("darkScreen");
    
        document.querySelector('.darkScreen').addEventListener("click", () => {
            // מעלים מסך חיפוש
            document.querySelector('.searchBoxHolder').classList.add("hidden");
            document.querySelector('.searchBox').classList.add("hidden");
            document.querySelector('.dropDown').classList.add("hidden");
            document.querySelector('.searchScren').classList.remove("darkScreen");
            // מחזיר כותרת ומשנה בחזרה גל
            document.querySelector('.title').classList.remove("hidden");
            document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
            if (strcurrentPage === "medShelf") {
                // מחזיר מדפי תרופות
                document.querySelector('.medTypeSymbol').classList.remove("hidden");
            } else {
                // מחזיר מסך בית
                document.querySelector('.aboutButton').classList.remove("hidden");
            }
        });
        document.querySelector('.searchBox').addEventListener('input', onSearch);
    } 
}

/* onSearch
--------------------------------------------------------------
Description: cheack for search match and creat dropdown accordingly */
const onSearch = () => {
    document.querySelector('.dropDown').style.pointerEvents = "all";
    // Saves user input in a varuble and resets the dropdown html.
    let strUserInput = document.querySelector('.searchBox').value;
    document.querySelector('.dropDown').innerHTML = "";
    document.querySelector('.dropDown').style.zIndex = "2";
    document.querySelector('.dropDown').classList.remove("hidden");
    // Goes over the object to check for a search match.
    for (let key of Object.keys(objMedInfo)){
        //Push the current match to it.
        if(key.includes(strUserInput) && strUserInput !== ""){
            let div = document.createElement("div");
            div.innerHTML = addSpace(key);
            div.classList.add("dropDownItem", key);
            document.querySelector('.dropDown').append(div);
            document.querySelector(`.${key}`).addEventListener("click", creatMedID);
        }
    }
    bSearchScreen = true
}

/* creatMedID
--------------------------------------------------------------
Description: Shows medicine id, hides privios div and adds listener to retern button*/
const creatMedID = (event) => {
    // שומר את התרופה נוכחית ואת האובייקט שלה
    let strCurrentMed =  event.currentTarget.classList[1]
    let objCurrentMed =  objMedInfo[strCurrentMed];
    // מראה את הדיב של התעודת זהות
    document.querySelector(`.medicineId`).classList.remove("hidden");
    // משנה מסך בהתאם למסך ממנו באנו
    if (strcurrentPage === "medShelf") {
        // מעלים מדפי תרופות
        document.querySelector(`.${strCurrentMedType}Shelf`).classList.add("hidden");
        document.querySelector(`.shelfsButtons`).classList.add("hidden");
    } else {
        // מעלים את המסך בית
        document.querySelector('.homePageButtons').classList.add("hidden");
        document.querySelector('.aboutButton').classList.add("hidden");
    }
    if (bSearchScreen) {
        // מעלים מסך חיפוש
        document.querySelector('.searchBoxHolder').classList.add("hidden");
        document.querySelector('.searchBox').classList.add("hidden");
        document.querySelector('.dropDown').classList.add("hidden");
        document.querySelector('.searchScren').classList.remove("darkScreen");
        document.querySelector('.title').classList.remove("hidden");
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
        document.querySelector('.dropDown').style.pointerEvents = "none";
    }
    // משנה כפתור עליון
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    // מחזיר מאזיני לחיצה, מאתחל גלילה ומוחק תעודות זהות קודמות
    document.querySelector('.medicineId').style.pointerEvents = "all";
    document.querySelector('.medicineId').innerHTML = "";
    document.querySelector('.medicineId').scrollTop = 0;
    // משנה כותרת
    document.querySelector(`.title`).classList.add("titelMedId");
    document.querySelector(`.title`).innerHTML = strCurrentMed;
    // משכפל טמפלט ומכניס את התעודת זהות
    let template = document.querySelector(`.${objCurrentMed.type}`);
    let clon = template.content.cloneNode(true);
    document.querySelector('.medicineId').appendChild(clon);
    // מכניס מידע מהאובייקט לתעודת זהות
    for (let key of Object.keys(objCurrentMed)){
        // Check which key and change html accordingly
        if (key === "pic"){
            document.querySelector(`.${key}`).setAttribute("src", `../assets/images/${objCurrentMed[key]}.png`)
        } else if (key === "mechanismOfAction" && objCurrentMed.type === "withMechanism") {
            document.querySelector(`.${key}`).innerHTML = `${objCurrentMed[key]}`;
        }
         else if (key !== "type" && key !== "medType") {
            document.querySelector(`.${key}`).innerHTML = `${objCurrentMed[key]}`;
        }
    }
    // שם מאזין לחץ חזור לפי הדף שהיה קודם
    if (strcurrentPage === "medShelf") {
        document.querySelector('.topButton').addEventListener("click", creatMedShelfs);
    } else {
        document.querySelector('.topButton').addEventListener("click", sendToHomePage);
    }
    // שומר את העמוד הנוכחי
    strcurrentPage = "medId"
    if (  bSearchScreen === true) {
        // משנה צבע
        if (strCurrentMedType !== undefined) {
            document.querySelector(`.wave`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
            document.querySelector(`.topButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        }
        // שומר סוג תרופה
        strMedTypeFromSearch = objCurrentMed.medType;
        // משנה צבע של הגל והכפתור
        document.querySelector(`.wave`).classList.add(objMedsShelfsColors[strMedTypeFromSearch][0]);
        document.querySelector(`.topButton`).classList.add(objMedsShelfsColors[strMedTypeFromSearch][0]);
    }
}

/* addSpace
--------------------------------------------------------------
Description: change hyphen to space */
const addSpace = (phrase) => {
    return phrase.replace(/-/g, ' ');
}

/* creatMedShelfs
--------------------------------------------------------------
Description: */
const creatMedShelfs = (event) => {
    if (strcurrentPage === "medId") {
        //  מעלים תעודת זהות, משנה מאפיינים לכותרת ומראה סמל
        document.querySelector('.medicineId').classList.add("hidden");
        document.querySelector(`.title`).classList.remove("titelMedId");
        // משנה את הכפתור העליון ושם לו מאזין  
        document.querySelector('.medTypeSymbol').classList.remove("hidden");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
        document.querySelector('.topButton').removeEventListener("click", creatMedShelfs);
        // משנה צבע של הגל והכפתור
        if (strMedTypeFromSearch !== undefined) {
            document.querySelector(`.wave`).classList.remove(objMedsShelfsColors[strMedTypeFromSearch][0]);
            document.querySelector(`.topButton`).classList.remove(objMedsShelfsColors[strMedTypeFromSearch][0]);
        }
    } else if (strcurrentPage === "homePage") {
        // שומר את סוג התרופות ומעלים מסך בית
        strCurrentMedType = event.currentTarget.classList[1]
        document.querySelector('.homePageButtons').classList.add("hidden");
        document.querySelector('.aboutButton').classList.add("hidden");
    } else if (strcurrentPage === "practicePage") {
        // משנה מאפיינים של כותרת
        document.querySelector(`.titleConeiner`).classList.remove("titleContainerPractice");
        // משנה גל וכפתור עליון
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
        document.querySelector('.topButton').classList.remove("topButtonPractice");
        // מעלים דמות ושאלה
        document.querySelector('.practicePage').classList.add("hidden");
        // משנה צבע של חלונית תשובות ושל כפתור סיום
        document.querySelector(`.practiceBottomButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.practiceRightAnswersConteiner`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        // מחליף תמונה של כפתור סיום לכפתור בדיקה
        document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/check_button.svg");
        // מעלים שאלות ומראה תשובות נכונות
        document.querySelector(`.practiceRightAnswersConteiner`).classList.add("hidden");
        document.querySelector(`.answersContainer`).classList.remove("hidden");
    }
   
    // שומר את העמוד הנוכחי
    strcurrentPage = "medShelf"
    // משנה צבע לפי הסוג
    document.querySelector(`.wave`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.topButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.searchBoxHolder`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.shelfsButtons .homeButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.practiceButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    // משנה כותרת
    document.querySelector(`.title`).innerHTML = objMedsShelfsColors[strCurrentMedType][2];
    document.querySelector(`.title`).classList.add("titleMedShelfs");
    // מראה מדפים, סמל בכותרת וכפתורים למטה
    document.querySelector(`.${strCurrentMedType}Shelf`).classList.remove("hidden");
    document.querySelector(`.medTypeSymbol`).classList.remove("hidden");
    document.querySelector(`.shelfsButtons`).classList.remove("hidden");
    document.querySelector(`.homeButton`).addEventListener("click", sendToHomePage);
    // שומר שאלות ושולח לתרגול
    QUESTIONS = shuffle(DATA[strCurrentMedType]["questionsPractice"]);
    document.querySelector(`.practiceButton`).addEventListener("click", onClickPractice);
    // משנה צבע מדפים ושם מאזין לפתיחה שלהם
    for (let i = 1; i <= objMedsShelfsColors[strCurrentMedType][1]; i++) {
        document.querySelector(`.${strCurrentMedType}Shelf > .shelf${i}`).addEventListener("click", controlShelfsDropDown)
        document.querySelector(`.${strCurrentMedType}Shelf .shelf${i} .downButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.${strCurrentMedType}Shelf .shelf${i} .shelf`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    }
    bSearchScreen = false;
}

/* controlShelfsDropDown
--------------------------------------------------------------
Description: */
const controlShelfsDropDown = (event) => {
    // שומר מדף שנלחץ
    let strChosenShelf = event.currentTarget.classList[1];
    // סוגר מדף
    if (document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf} .downButton`).getAttribute("src").includes("up")) {
        document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf} .downButton`).setAttribute("src", "../assets/images/grapics/med-shelfs/down-button.svg");
        document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf}dropDown`).classList.add("hidden");
    }else { // פותח מדף
        let arrMedIdButtons = document.querySelectorAll(`.${strCurrentMedType}Shelf >  .${strChosenShelf}dropDown .shelfMedPicContainer`);
        for (let i = 0; i < arrMedIdButtons.length; i++) {
            arrMedIdButtons[i].addEventListener('click', creatMedID);
        }
        document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf}dropDown`).classList.remove("hidden");
        document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf} .downButton`).setAttribute("src", "../assets/images/grapics/med-shelfs/up-button.svg");
    }
}

/* sendToHomePage
--------------------------------------------------------------
Description: */
const sendToHomePage = () => {
    if (strcurrentPage === "medId") {
        // מוריד צבע של הגל והכפתור
        document.querySelector(`.wave`).classList.remove(objMedsShelfsColors[strMedTypeFromSearch][0]);
        document.querySelector(`.topButton`).classList.remove(objMedsShelfsColors[strMedTypeFromSearch][0]);
        // לא מאפשר מאזיני לחיצה, מעלים תעודת זהות ומאפיינים של הכותרת
        document.querySelector('.medicineId').style.pointerEvents = "none";
        document.querySelector('.medicineId').classList.add("hidden");
        document.querySelector(`.title`).classList.remove("titelMedId");
        // משנה כפתור חץ לחיפוש ומוריד ממנו מאזין
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
        document.querySelector('.topButton').removeEventListener("click", sendToHomePage);
    } else if (strcurrentPage === "medShelf") {
        // מעלים מדפים, סמלים בכותרת וכפתורים למטה
        document.querySelector(`.${strCurrentMedType}Shelf`).classList.add("hidden");
        document.querySelector(`.medTypeSymbol`).classList.add("hidden");
        document.querySelector(`.shelfsButtons`).classList.add("hidden");
        // משנה מאפיינים של כותרת
        document.querySelector(`.title`).classList.remove("titleMedShelfs");
        // משנה חזרה צבעים לכחול
        document.querySelector(`.wave`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.topButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.searchBoxHolder`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.shelfsButtons .homeButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.practiceButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
    } else if (strcurrentPage === "examPrePage") {
        // מעלים דף התחלת מבחן, ומשנה כפתור עליו לחיפוש 
        document.querySelector(`.examPage`).classList.add("hidden");
        document.querySelector(`.beforeExamPage`).classList.add("hidden"); 
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
    }  else if (strcurrentPage === "endOfTest") {
        // מעלים דף סיום מבחן, ומשנה כפתור עליו לחיפוש 
        document.querySelector(`.afterExamPage`).classList.add("hidden");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
    } else {
        // מעלים דף אודות, ומשנה כפתור עליו לחיפוש 
        document.querySelector('.aboutPage').classList.add("hidden");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
    }
    // משנה כותרת, מראה דף בית וכפתור אודות 
    document.querySelector(`.title`).innerHTML = "תקן 15";
    document.querySelector('.homePageButtons').classList.remove("hidden");
    document.querySelector('.aboutButton').classList.remove("hidden");
    // שומר דף נוכחי
    strcurrentPage = "homePage"
}