// Mock data for the health chatbot application
// Symptom checker data
export const symptoms = [
    { id: 1, name: 'Fever', name_od: 'ଜ୍ୱର', name_hi: 'बुखार' },
    { id: 2, name: 'Cough', name_od: 'କାଶ', name_hi: 'खांसी' },
    { id: 3, name: 'Headache', name_od: 'ମୁଣ୍ଡବିନ୍ଧା', name_hi: 'सिरदर्द' },
    {
        id: 4,
        name: 'Sore throat',
        name_od: 'ଗଳା ଯନ୍ତ୍ରଣା',
        name_hi: 'गले में खराश',
    },
    { id: 5, name: 'Fatigue', name_od: 'କ୍ଳାନ୍ତି', name_hi: 'थकान' },
    { id: 6, name: 'Nausea', name_od: 'ବାନ୍ତି ଭାବ', name_hi: 'मतली' },
    { id: 7, name: 'Diarrhea', name_od: 'ଡାଇରିଆ', name_hi: 'दस्त' },
    {
        id: 8,
        name: 'Shortness of breath',
        name_od: 'ଶ୍ୱାସ ନେବାରେ ଅସୁବିଧା',
        name_hi: 'सांस लेने में तकलीफ',
    },
    {
        id: 9,
        name: 'Chest pain',
        name_od: 'ଛାତି ଯନ୍ତ୍ରଣା',
        name_hi: 'छाती में दर्द',
    },
    { id: 10, name: 'Rash', name_od: 'ଚର୍ମ ଫୁଲା', name_hi: 'चकत्ते' },
]
// Possible conditions based on symptoms
export const conditions = [
    {
        id: 1,
        name: 'Common Cold',
        name_od: 'ସାଧାରଣ ଥଣ୍ଡା',
        name_hi: 'जुकाम',
        symptoms: [2, 4, 5],
        severity: 'Low',
        prevention: [
            'Wash hands frequently',
            'Avoid close contact with sick people',
            'Rest and stay hydrated',
        ],
        prevention_od: [
            'ବାରମ୍ବାର ହାତ ଧୁଅନ୍ତୁ',
            'ଅସୁସ୍ଥ ଲୋକଙ୍କ ସହ ନିକଟ ସମ୍ପର୍କ ଏଡ଼ାନ୍ତୁ',
            'ବିଶ୍ରାମ ନିଅନ୍ତୁ ଏବଂ ହାଇଡ୍ରେଟେଡ୍ ରୁହନ୍ତୁ',
        ],
        prevention_hi: [
            'बार-बार हाथ धोएं',
            'बीमार लोगों के साथ निकट संपर्क से बचें',
            'आराम करें और हाइड्रेटेड रहें',
        ],
    },
    {
        id: 2,
        name: 'Flu',
        name_od: 'ଫ୍ଲୁ',
        name_hi: 'फ्लू',
        symptoms: [1, 2, 3, 4, 5],
        severity: 'Medium',
        prevention: [
            'Get annual flu vaccine',
            'Wash hands frequently',
            'Avoid touching face with unwashed hands',
        ],
        prevention_od: [
            'ବାର୍ଷିକ ଫ୍ଲୁ ଟୀକା ନିଅନ୍ତୁ',
            'ବାରମ୍ବାର ହାତ ଧୁଅନ୍ତୁ',
            'ଅଣଧୋଇ ହାତରେ ମୁହଁ ଛୁଇଁବା ଏଡ଼ାନ୍ତୁ',
        ],
        prevention_hi: [
            'वार्षिक फ्लू वैक्सीन लगवाएं',
            'बार-बार हाथ धोएं',
            'अनधुले हाथों से चेहरे को छूने से बचें',
        ],
    },
    {
        id: 3,
        name: 'COVID-19',
        name_od: 'କୋଭିଡ-୧୯',
        name_hi: 'कोविड-19',
        symptoms: [1, 2, 5, 8],
        severity: 'High',
        prevention: [
            'Get vaccinated',
            'Wear masks in crowded places',
            'Maintain social distancing',
            'Wash hands frequently',
        ],
        prevention_od: [
            'ଟୀକାକରଣ କରନ୍ତୁ',
            'ଭିଡ଼ ସ୍ଥାନରେ ମାସ୍କ ପିନ୍ଧନ୍ତୁ',
            'ସାମାଜିକ ଦୂରତା ବଜାୟ ରଖନ୍ତୁ',
            'ବାରମ୍ବାର ହାତ ଧୁଅନ୍ତୁ',
        ],
        prevention_hi: [
            'टीकाकरण करवाएं',
            'भीड़भाड़ वाली जगहों पर मास्क पहनें',
            'सामाजिक दूरी बनाए रखें',
            'बार-बार हाथ धोएं',
        ],
    },
    {
        id: 4,
        name: 'Food Poisoning',
        name_od: 'ଖାଦ୍ୟ ବିଷକ୍ରିୟା',
        name_hi: 'खाद्य विषाक्तता',
        symptoms: [1, 6, 7],
        severity: 'Medium',
        prevention: [
            'Cook food thoroughly',
            'Keep raw and cooked food separate',
            'Refrigerate leftovers promptly',
            'Wash hands before handling food',
        ],
        prevention_od: [
            'ଖାଦ୍ୟ ଭଲ ଭାବରେ ରନ୍ଧନ କରନ୍ତୁ',
            'କଞ୍ଚା ଏବଂ ରନ୍ଧା ଖାଦ୍ୟକୁ ଅଲଗା ରଖନ୍ତୁ',
            'ବଳକା ଖାଦ୍ୟକୁ ଶୀଘ୍ର ରେଫ୍ରିଜରେଟ୍ କରନ୍ତୁ',
            'ଖାଦ୍ୟ ସମ୍ଭାଳିବା ପୂର୍ବରୁ ହାତ ଧୁଅନ୍ତୁ',
        ],
        prevention_hi: [
            'खाना अच्छी तरह से पकाएं',
            'कच्चे और पके हुए खाने को अलग रखें',
            'बचे हुए खाने को तुरंत फ्रिज में रखें',
            'खाना छूने से पहले हाथ धोएं',
        ],
    },
    {
        id: 5,
        name: 'Heart Attack',
        name_od: 'ହୃଦଘାତ',
        name_hi: 'दिल का दौरा',
        symptoms: [9, 8, 5],
        severity: 'Emergency',
        prevention: [
            'Maintain healthy diet',
            'Regular exercise',
            'Avoid smoking',
            'Regular health check-ups',
            'Manage stress',
        ],
        prevention_od: [
            'ସ୍ୱାସ୍ଥ୍ୟକର ଖାଦ୍ୟ ବଜାୟ ରଖନ୍ତୁ',
            'ନିୟମିତ ବ୍ୟାୟାମ',
            'ଧୂମପାନ ଏଡ଼ାନ୍ତୁ',
            'ନିୟମିତ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ',
            'ମାନସିକ ଚାପ ପରିଚାଳନା କରନ୍ତୁ',
        ],
        prevention_hi: [
            'स्वस्थ आहार बनाए रखें',
            'नियमित व्यायाम करें',
            'धूम्रपान से बचें',
            'नियमित स्वास्थ्य जांच करवाएं',
            'तनाव का प्रबंधन करें',
        ],
    },
]
// First aid tips
export const firstAidTips = [
    {
        id: 1,
        title: 'Burns',
        title_od: 'ଜଳିବା',
        title_hi: 'जलन',
        steps: [
            'Cool the burn with cool (not cold) running water for 10-15 minutes',
            'Remove jewelry and tight items from the burned area',
            'Cover with a sterile, non-stick bandage',
            'Take pain reliever if needed',
            'Seek medical help for severe or large burns',
        ],
        steps_od: [
            '10-15 ମିନିଟ୍ ପାଇଁ ଶୀତଳ (ଥଣ୍ଡା ନୁହେଁ) ପାଣିରେ ଜଳିବାକୁ ଶୀତଳ କରନ୍ତୁ',
            'ଜଳିଥିବା ଅଞ୍ଚଳରୁ ଗହଣା ଏବଂ ଟାଇଟ୍ ଜିନିଷ ବାହାର କରନ୍ତୁ',
            'ଏକ ଜୀବାଣୁମୁକ୍ତ, ନନ୍-ଷ୍ଟିକ୍ ବ୍ୟାଣ୍ଡେଜ୍ ସହିତ ଆଚ୍ଛାଦନ କରନ୍ତୁ',
            'ଆବଶ୍ୟକ ହେଲେ ଯନ୍ତ୍ରଣା ନିବାରକ ନିଅନ୍ତୁ',
            'ଗୁରୁତର କିମ୍ବା ବଡ଼ ଜଳିବା ପାଇଁ ଚିକିତ୍ସା ସାହାଯ୍ୟ ନିଅନ୍ତୁ',
        ],
        steps_hi: [
            '10-15 मिनट के लिए जले हुए स्थान को ठंडे (बर्फ जैसे ठंडे नहीं) पानी से धोएं',
            'जले हुए क्षेत्र से गहने और तंग वस्तुएं हटाएं',
            'एक स्टेरिल, नॉन-स्टिक बैंडेज से ढकें',
            'आवश्यकता होने पर दर्द निवारक लें',
            'गंभीर या बड़े जलने के लिए चिकित्सा सहायता लें',
        ],
    },
    {
        id: 2,
        title: 'Cuts and Wounds',
        title_od: 'କଟା ଏବଂ କ୍ଷତ',
        title_hi: 'कट और घाव',
        steps: [
            'Wash your hands first',
            'Clean the wound with clean water',
            'Apply gentle pressure to stop bleeding',
            'Apply antibiotic ointment if available',
            'Cover with a clean bandage',
            "Seek medical help for deep cuts or if bleeding doesn't stop",
        ],
        steps_od: [
            'ପ୍ରଥମେ ନିଜ ହାତ ଧୁଅନ୍ତୁ',
            'ସଫା ପାଣିରେ କ୍ଷତ ସଫା କରନ୍ତୁ',
            'ରକ୍ତସ୍ରାବ ବନ୍ଦ କରିବାକୁ ମୃଦୁ ଚାପ ପ୍ରୟୋଗ କରନ୍ତୁ',
            'ଯଦି ଉପଲବ୍ଧ, ଆଣ୍ଟିବାୟୋଟିକ୍ ମଲମ ଲଗାନ୍ତୁ',
            'ସଫା ବ୍ୟାଣ୍ଡେଜ୍ ସହିତ ଆଚ୍ଛାଦନ କରନ୍ତୁ',
            'ଗଭୀର କଟା ପାଇଁ କିମ୍ବା ଯଦି ରକ୍ତସ୍ରାବ ବନ୍ଦ ନ ହୁଏ ଚିକିତ୍ସା ସାହାଯ୍ୟ ନିଅନ୍ତୁ',
        ],
        steps_hi: [
            'पहले अपने हाथ धोएं',
            'घाव को साफ पानी से साफ करें',
            'रक्तस्राव रोकने के लिए हल्का दबाव डालें',
            'यदि उपलब्ध हो तो एंटीबायोटिक मरहम लगाएं',
            'साफ पट्टी से ढकें',
            'गहरे कटने या अगर रक्तस्राव नहीं रुकता है तो चिकित्सा सहायता लें',
        ],
    },
    {
        id: 3,
        title: 'Snake Bite',
        title_od: 'ସାପ କାମୁଡ଼ିବା',
        title_hi: 'सांप का काटना',
        steps: [
            'Keep the victim calm and still',
            'Remove tight clothing and jewelry',
            'Position the wound below the heart if possible',
            'Clean the wound gently',
            'DO NOT cut the wound or try to suck out venom',
            'DO NOT apply ice or immerse in water',
            'Seek emergency medical help immediately',
        ],
        steps_od: [
            'ପୀଡ଼ିତକୁ ଶାନ୍ତ ଏବଂ ସ୍ଥିର ରଖନ୍ତୁ',
            'ଟାଇଟ୍ ପୋଷାକ ଏବଂ ଗହଣା ବାହାର କରନ୍ତୁ',
            'ସମ୍ଭବ ହେଲେ କ୍ଷତକୁ ହୃଦୟ ତଳେ ରଖନ୍ତୁ',
            'କ୍ଷତକୁ ମୃଦୁ ଭାବରେ ସଫା କରନ୍ତୁ',
            'କ୍ଷତକୁ କାଟନ୍ତୁ ନାହିଁ କିମ୍ବା ବିଷ ଚୁଷିବାକୁ ଚେଷ୍ଟା କରନ୍ତୁ ନାହିଁ',
            'ବରଫ ପ୍ରୟୋଗ କରନ୍ତୁ ନାହିଁ କିମ୍ବା ପାଣିରେ ବୁଡ଼ାନ୍ତୁ ନାହିଁ',
            'ତୁରନ୍ତ ଜରୁରୀକାଳୀନ ଚିକିତ୍ସା ସାହାଯ୍ୟ ନିଅନ୍ତୁ',
        ],
        steps_hi: [
            'पीड़ित को शांत और स्थिर रखें',
            'तंग कपड़े और गहने हटाएं',
            'यदि संभव हो तो घाव को हृदय से नीचे रखें',
            'घाव को धीरे से साफ करें',
            'घाव को काटें नहीं या जहर चूसने की कोशिश न करें',
            'बर्फ न लगाएं या पानी में न डुबोएं',
            'तुरंत आपातकालीन चिकित्सा सहायता लें',
        ],
    },
]
// Health tips
export const healthTips = [
    {
        id: 1,
        tip: 'Drink at least 8 glasses of water daily',
        tip_od: 'ଦୈନିକ ଅତି କମରେ 8 ଗ୍ଲାସ୍ ପାଣି ପିଅନ୍ତୁ',
        tip_hi: 'रोजाना कम से कम 8 गिलास पानी पिएं',
        category: 'Hydration',
    },
    {
        id: 2,
        tip: 'Include fruits and vegetables in every meal',
        tip_od: 'ପ୍ରତ୍ୟେକ ଖାଦ୍ୟରେ ଫଳ ଏବଂ ପନିପରିବା ଅନ୍ତର୍ଭୁକ୍ତ କରନ୍ତୁ',
        tip_hi: 'हर भोजन में फल और सब्जियां शामिल करें',
        category: 'Nutrition',
    },
    {
        id: 3,
        tip: 'Exercise for at least 30 minutes daily',
        tip_od: 'ଦୈନିକ ଅତି କମରେ 30 ମିନିଟ୍ ବ୍ୟାୟାମ କରନ୍ତୁ',
        tip_hi: 'रोजाना कम से कम 30 मिनट व्यायाम करें',
        category: 'Physical Activity',
    },
    {
        id: 4,
        tip: 'Get 7-8 hours of sleep every night',
        tip_od: 'ପ୍ରତି ରାତିରେ 7-8 ଘଣ୍ଟା ଶୋଇବା',
        tip_hi: 'हर रात 7-8 घंटे की नींद लें',
        category: 'Sleep',
    },
    {
        id: 5,
        tip: 'Practice meditation for stress management',
        tip_od: 'ମାନସିକ ଚାପ ପରିଚାଳନା ପାଇଁ ଧ୍ୟାନ ଅଭ୍ୟାସ କରନ୍ତୁ',
        tip_hi: 'तनाव प्रबंधन के लिए ध्यान का अभ्यास करें',
        category: 'Mental Health',
    },
    {
        id: 6,
        tip: 'Wash hands frequently with soap and water',
        tip_od: 'ସାବୁନ୍ ଏବଂ ପାଣିରେ ବାରମ୍ବାର ହାତ ଧୁଅନ୍ତୁ',
        tip_hi: 'साबुन और पानी से बार-बार हाथ धोएं',
        category: 'Hygiene',
    },
    {
        id: 7,
        tip: 'Limit processed foods and added sugars',
        tip_od: 'ପ୍ରକ୍ରିୟାକରଣ ଖାଦ୍ୟ ଏବଂ ଅତିରିକ୍ତ ଚିନି ସୀମିତ କରନ୍ତୁ',
        tip_hi: 'प्रसंस्कृत खाद्य पदार्थ और अतिरिक्त चीनी को सीमित करें',
        category: 'Nutrition',
    },
    {
        id: 8,
        tip: 'Take breaks from screen time every hour',
        tip_od: 'ପ୍ରତି ଘଣ୍ଟାରେ ସ୍କ୍ରିନ୍ ସମୟରୁ ବିରତି ନିଅନ୍ତୁ',
        tip_hi: 'हर घंटे स्क्रीन टाइम से ब्रेक लें',
        category: 'Eye Health',
    },
    // Additional health tips
    {
        id: 9,
        tip: 'Eat a variety of protein sources including plant-based options',
        tip_od: 'ଉଦ୍ଭିଦ-ଆଧାରିତ ବିକଳ୍ପ ସହିତ ବିଭିନ୍ନ ପ୍ରୋଟିନ୍ ଉତ୍ସ ଖାଆନ୍ତୁ',
        tip_hi: 'पौधे-आधारित विकल्पों सहित विभिन्न प्रोटीन स्रोतों का सेवन करें',
        category: 'Nutrition',
    },
    {
        id: 10,
        tip: 'Practice deep breathing for 5 minutes when feeling stressed',
        tip_od:
            'ମାନସିକ ଚାପ ଅନୁଭବ କଲାବେଳେ 5 ମିନିଟ୍ ପାଇଁ ଗଭୀର ଶ୍ୱାସ ନେବା ଅଭ୍ୟାସ କରନ୍ତୁ',
        tip_hi: 'तनाव महसूस करने पर 5 मिनट के लिए गहरी सांस लेने का अभ्यास करें',
        category: 'Mental Health',
    },
    {
        id: 11,
        tip: 'Maintain good posture while sitting and standing',
        tip_od: 'ବସିବା ଏବଂ ଠିଆ ହେବା ସମୟରେ ଭଲ ଭଙ୍ଗୀ ବଜାୟ ରଖନ୍ତୁ',
        tip_hi: 'बैठते और खड़े होते समय अच्छी मुद्रा बनाए रखें',
        category: 'Posture',
    },
    {
        id: 12,
        tip: 'Reduce salt intake to help maintain healthy blood pressure',
        tip_od: 'ସ୍ୱାସ୍ଥ୍ୟକର ରକ୍ତଚାପ ବଜାୟ ରଖିବାକୁ ଲୁଣ ଗ୍ରହଣ କମ କରନ୍ତୁ',
        tip_hi: 'स्वस्थ रक्तचाप बनाए रखने के लिए नमक का सेवन कम करें',
        category: 'Heart Health',
    },
    {
        id: 13,
        tip: 'Use sunscreen with at least SPF 30 when outdoors',
        tip_od: 'ବାହାରେ ଥିବା ସମୟରେ ଅତି କମରେ SPF 30 ସହିତ ସନସ୍କ୍ରିନ୍ ବ୍ୟବହାର କରନ୍ତୁ',
        tip_hi: 'बाहर होने पर कम से कम SPF 30 के साथ सनस्क्रीन का उपयोग करें',
        category: 'Skin Health',
    },
    {
        id: 14,
        tip: "Practice gratitude by noting three things you're thankful for each day",
        tip_od:
            'ପ୍ରତିଦିନ ଆପଣ ଧନ୍ୟବାଦ ଦେଉଥିବା ତିନୋଟି ଜିନିଷ ଲେଖି କୃତଜ୍ଞତା ଅଭ୍ୟାସ କରନ୍ତୁ',
        tip_hi:
            'प्रतिदिन तीन चीजों को नोट करके आभार का अभ्यास करें जिनके लिए आप आभारी हैं',
        category: 'Mental Health',
    },
    {
        id: 15,
        tip: 'Replace sugary drinks with water or unsweetened beverages',
        tip_od: 'ଚିନି ଯୁକ୍ତ ପାନୀୟକୁ ପାଣି କିମ୍ବା ବିନା ଚିନି ପାନୀୟ ସହ ବଦଳାନ୍ତୁ',
        tip_hi: 'मीठे पेय को पानी या बिना मीठे पेय से बदलें',
        category: 'Nutrition',
    },
    {
        id: 16,
        tip: 'Take the stairs instead of the elevator when possible',
        tip_od: 'ସମ୍ଭବ ହେଲେ ଲିଫ୍ଟ ପରିବର୍ତ୍ତେ ପାହାଚ ନିଅନ୍ତୁ',
        tip_hi: 'जब संभव हो तो लिफ्ट के बजाय सीढ़ियों का उपयोग करें',
        category: 'Physical Activity',
    },
]
// Emergency contacts
export const emergencyContacts = [
    {
        id: 1,
        name: 'Ambulance',
        name_od: 'ଆମ୍ବୁଲାନ୍ସ',
        name_hi: 'एम्बुलेंस',
        number: '108',
    },
    {
        id: 2,
        name: 'Police',
        name_od: 'ପୋଲିସ',
        name_hi: 'पुलिस',
        number: '100',
    },
    {
        id: 3,
        name: 'Women Helpline',
        name_od: 'ମହିଳା ହେଲ୍ପଲାଇନ୍',
        name_hi: 'महिला हेल्पलाइन',
        number: '181',
    },
    {
        id: 4,
        name: 'Child Helpline',
        name_od: 'ଶିଶୁ ହେଲ୍ପଲାଇନ୍',
        name_hi: 'चाइल्ड हेल्पलाइन',
        number: '1098',
    },
    {
        id: 5,
        name: 'Mental Health Helpline',
        name_od: 'ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ ହେଲ୍ପଲାଇନ୍',
        name_hi: 'मानसिक स्वास्थ्य हेल्पलाइन',
        number: '1800-599-0019',
    },
]
// Mock hospitals data
export const hospitals = [
    {
        id: 1,
        name: 'Capital Hospital',
        name_od: 'କ୍ୟାପିଟାଲ୍ ହସ୍ପିଟାଲ୍',
        name_hi: 'कैपिटल हॉस्पिटल',
        address: 'Unit-6, Bhubaneswar, Odisha',
        address_od: 'Bhubaneswar-6, Bhubaneswar, Odisha',
        address_hi: 'यूनिट-6, भुवनेश्वर, ओडिशा',
        phone: '0674-2391983',
    },
    {
        id: 2,
        name: 'SCB Medical College',
        name_od: 'ଏସସିବି ମେଡିକାଲ କଲେଜ',
        name_hi: 'एससीबी मेडिकल कॉलेज',
        address: 'Mangalabag, Cuttack, Odisha',
        address_od: 'Mangalabag, Cuttack, Odisha',
        address_hi: 'मंगलाबाग, कटक, ओडिशा',
        phone: '0671-2414080',
    },
    {
        id: 3,
        name: 'MKCG Medical College',
        name_od: 'ଏମକେସିଜି ମେଡିକାଲ କଲେଜ',
        name_hi: 'एमकेसीजी मेडिकल कॉलेज',
        address: 'Berhampur, Ganjam, Odisha',
        address_od: 'Berhampur, Ganjam, Odisha',
        address_hi: 'Cuttack, Ganjam, Odisha',
        phone: '0680-2292746',
    },
]
// Chatbot FAQ responses
export const faqResponses = [
    {
        id: 1,
        question: 'What are the symptoms of malaria?',
        question_od: "ମ୍ୟାଲେରିଆର ଲକ୍ଷଣଗୁଡ଼ିକ କ'ଣ?",
        answer:
            'Common symptoms of malaria include fever, chills, headache, sweats, fatigue, nausea, vomiting, and body aches. In severe cases, it can cause yellow skin, seizures, coma, or death.',
        answer_od:
            'ମ୍ୟାଲେରିଆର ସାଧାରଣ ଲକ୍ଷଣଗୁଡ଼ିକ ମଧ୍ୟରେ ଜ୍ୱର, ଥଣ୍ଡା, ମୁଣ୍ଡବିନ୍ଧା, ଝାଳ, କ୍ଳାନ୍ତି, ବାନ୍ତି ଭାବ, ବାନ୍ତି, ଏବଂ ଶରୀର ଯନ୍ତ୍ରଣା ଅନ୍ତର୍ଭୁକ୍ତ। ଗୁରୁତର ମାମଲାରେ, ଏହା ହଳଦିଆ ଚର୍ମ, ମୃଗୀ, କୋମା, କିମ୍ବା ମୃତ୍ୟୁ ଘଟାଇପାରେ।',
        answer_hi:
            'मलेरिया के आम लक्षणों में बुखार, ठंड लगना, सिरदर्द, पसीना, थकान, मतली, उल्टी और शरीर में दर्द शामिल हैं। गंभीर मामलों में, यह पीली त्वचा, दौरे, कोमा या मृत्यु का कारण बन सकता है।',
    },
    {
        id: 2,
        question: 'How can I prevent dengue?',
        question_od: 'ମୁଁ ଡେଙ୍ଗୁ କିପରି ପ୍ରତିରୋଧ କରିପାରିବି?',
        question_hi: 'मैं डेंगू को कैसे रोक सकता हूं?',
        answer:
            'To prevent dengue: 1) Eliminate standing water where mosquitoes breed, 2) Use mosquito repellents, 3) Wear long-sleeved clothes, 4) Use mosquito nets while sleeping, 5) Keep windows and doors screened, 6) Clean and cover water storage containers regularly.',
        answer_od:
            'ଡେଙ୍ଗୁ ପ୍ରତିରୋଧ କରିବାକୁ: 1) ମଶା ପ୍ରଜନନ କରୁଥିବା ସ୍ଥାନରେ ପାଣି ଜମିବାକୁ ଦିଅନ୍ତୁ ନାହିଁ, 2) ମଶା ପ୍ରତିରୋଧକ ବ୍ୟବହାର କରନ୍ତୁ, 3) ଲମ୍ବା ହାତ ପୋଷାକ ପିନ୍ଧନ୍ତୁ, 4) ଶୋଇବା ସମୟରେ ମଶାରୀ ବ୍ୟବହାର କରନ୍ତୁ, 5) ଝରକା ଏବଂ ଦ୍ୱାର ସ୍କ୍ରିନ୍ ରଖନ୍ତୁ, 6) ପାଣି ସଂରକ୍ଷଣ ପାତ୍ରଗୁଡ଼ିକୁ ନିୟମିତ ସଫା ଏବଂ ଢାଙ୍କନ୍ତୁ।',
        answer_hi:
            'डेंगू को रोकने के लिए: 1) मच्छरों के प्रजनन वाले स्थानों पर पानी जमा न होने दें, 2) मच्छर विकर्षक का उपयोग करें, 3) लंबी आस्तीन वाले कपड़े पहनें, 4) सोते समय मच्छरदानी का उपयोग करें, 5) खिड़कियों और दरवाजों पर जाली लगाएं, 6) पानी के भंडारण वाले बर्तनों को नियमित रूप से साफ करें और ढकें।',
    },
    {
        id: 3,
        question: 'What should I do if I have diarrhea?',
        question_od: "ଯଦି ମୋର ଡାଇରିଆ ଅଛି, ମୁଁ କ'ଣ କରିବି?",
        answer:
            "For diarrhea: 1) Stay hydrated by drinking ORS, water, and clear broths, 2) Eat small, frequent meals of bland foods like rice, bananas, and toast, 3) Avoid dairy, caffeine, and spicy foods, 4) Wash hands frequently, 5) Seek medical help if there's blood in stool, high fever, severe pain, or symptoms last more than 2 days.",
        answer_od:
            'ଡାଇରିଆ ପାଇଁ: 1) ORS, ପାଣି, ଏବଂ ସ୍ପଷ୍ଟ ସୁରୁଆ ପିଇ ହାଇଡ୍ରେଟେଡ୍ ରୁହନ୍ତୁ, 2) ଚାଉଳ, କଦଳୀ, ଏବଂ ଟୋଷ୍ଟ ଭଳି ହାଲୁକା ଖାଦ୍ୟର ଛୋଟ, ଘନଘନ ଖାଦ୍ୟ ଖାଆନ୍ତୁ, 3) ଦୁଗ୍ଧଜାତ, କ୍ୟାଫେନ୍, ଏବଂ ମସଲାଯୁକ୍ତ ଖାଦ୍ୟ ଏଡ଼ାନ୍ତୁ, 4) ବାରମ୍ବାର ହାତ ଧୁଅନ୍ତୁ, 5) ଯଦି ମଳରେ ରକ୍ତ, ଅଧିକ ଜ୍ୱର, ଗୁରୁତର ଯନ୍ତ୍ରଣା, କିମ୍ବା ଲକ୍ଷଣ 2 ଦିନରୁ ଅଧିକ ରହେ, ଚିକିତ୍ସା ସାହାଯ୍ୟ ନିଅନ୍ତୁ।',
        answer_hi:
            'दस्त के लिए: 1) ORS, पानी और साफ शोरबा पीकर हाइड्रेटेड रहें, 2) चावल, केला और टोस्ट जैसे हल्के खाद्य पदार्थों के छोटे, बार-बार भोजन करें, 3) डेयरी, कैफीन और मसालेदार खाद्य पदार्थों से बचें, 4) बार-बार हाथ धोएं, 5) अगर मल में खून है, तेज बुखार है, गंभीर दर्द है, या लक्षण 2 दिनों से अधिक समय तक रहते हैं, तो चिकित्सा सहायता लें।',
    },
]
// Health articles
export const healthArticles = [
    {
        id: 1,
        title: 'Understanding Diabetes: Symptoms, Causes, and Management',
        title_od: 'ମଧୁମେହ ବୁଝିବା: ଲକ୍ଷଣ, କାରଣ ଏବଂ ପରିଚାଳନା',
        title_hi: 'मधुमेह को समझना: लक्षण, कारण और प्रबंधन',
        summary:
            'Learn about the different types of diabetes, risk factors, and how to manage this chronic condition effectively.',
        summary_od:
            'ବିଭିନ୍ନ ପ୍ରକାରର ମଧୁମେହ, ଝୁଙ୍କି କାରଣ ଏବଂ କିପରି ଏହି ଦୀର୍ଘକାଳୀନ ସ୍ଥିତିକୁ ପ୍ରଭାବଶାଳୀ ଭାବରେ ପରିଚାଳନା କରିବେ ବିଷୟରେ ଜାଣନ୍ତୁ।',
        summary_hi:
            'मधुमेह के विभिन्न प्रकारों, जोखिम कारकों और इस दीर्घकालिक स्थिति को प्रभावी ढंग से प्रबंधित करने के तरीके के बारे में जानें।',
        image:
            'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        category: 'Chronic Disease',
        content: [
            'Diabetes is a chronic health condition that affects how your body turns food into energy. Most of the food you eat is broken down into sugar (glucose) and released into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin.',
            "There are three main types of diabetes: Type 1, Type 2, and gestational diabetes. Type 1 diabetes is thought to be caused by an autoimmune reaction that stops your body from making insulin. Type 2 diabetes occurs when your body becomes resistant to insulin or doesn't make enough insulin. Gestational diabetes develops in pregnant women who have never had diabetes.",
            'Common symptoms of diabetes include increased thirst, frequent urination, extreme hunger, unexplained weight loss, fatigue, irritability, blurred vision, slow-healing sores, and frequent infections.',
            'Management strategies include regular monitoring of blood sugar levels, taking medications as prescribed, following a healthy diet, engaging in regular physical activity, and maintaining a healthy weight.',
        ],
        content_od: [
            'ମଧୁମେହ ଏକ ଦୀର୍ଘକାଳୀନ ସ୍ୱାସ୍ଥ୍ୟ ସ୍ଥିତି ଯାହା ଆପଣଙ୍କ ଶରୀର କିପରି ଖାଦ୍ୟକୁ ଶକ୍ତିରେ ପରିଣତ କରେ ତାକୁ ପ୍ରଭାବିତ କରେ। ଆପଣ ଖାଉଥିବା ଅଧିକାଂଶ ଖାଦ୍ୟ ଚିନିରେ (ଗ୍ଲୁକୋଜ୍) ଭାଙ୍ଗି ଆପଣଙ୍କ ରକ୍ତପ୍ରବାହରେ ମୁକ୍ତ ହୁଏ। ଯେତେବେଳେ ଆପଣଙ୍କ ରକ୍ତ ଚିନି ବୃଦ୍ଧି ପାଏ, ଏହା ଆପଣଙ୍କ ଅଗ୍ନ୍ୟାଶୟକୁ ଇନସୁଲିନ୍ ମୁକ୍ତ କରିବାକୁ ସଙ୍କେତ ଦିଏ।',
            'ତିନୋଟି ମୁଖ୍ୟ ପ୍ରକାରର ମଧୁମେହ ଅଛି: ଟାଇପ୍ 1, ଟାଇପ୍ 2, ଏବଂ ଗର୍ଭାବସ୍ଥା ମଧୁମେହ। ଟାଇପ୍ 1 ମଧୁମେହ ଏକ ଅଟୋଇମ୍ୟୁନ୍ ପ୍ରତିକ୍ରିୟା ଦ୍ୱାରା ହେଉଥିବା ଭାବିଯାଏ ଯାହା ଆପଣଙ୍କ ଶରୀରକୁ ଇନସୁଲିନ୍ ତିଆରି କରିବାରୁ ବନ୍ଦ କରିଦିଏ। ଟାଇପ୍ 2 ମଧୁମେହ ସେତେବେଳେ ହୁଏ ଯେତେବେଳେ ଆପଣଙ୍କ ଶରୀର ଇନସୁଲିନ୍ ପ୍ରତି ପ୍ରତିରୋଧକ ହୁଏ କିମ୍ବା ପର୍ଯ୍ୟାପ୍ତ ଇନସୁଲିନ୍ ତିଆରି କରେ ନାହିଁ। ଗର୍ଭାବସ୍ଥା ମଧୁମେହ ଗର୍ଭବତୀ ମହିଳାମାନଙ୍କଠାରେ ବିକଶିତ ହୁଏ ଯେଉଁମାନଙ୍କର ପୂର୍ବରୁ ମଧୁମେହ ନଥିଲା।',
            'ମଧୁମେହର ସାଧାରଣ ଲକ୍ଷଣଗୁଡ଼ିକ ମଧ୍ୟରେ ଅଧିକ ତୃଷ୍ଣା, ବାରମ୍ବାର ପ୍ରସ୍ରାବ, ଅତ୍ୟଧିକ କ୍ଷୁଧା, ଅବ୍ୟାଖ୍ୟାତ ଓଜନ ହ୍ରାସ, କ୍ଳାନ୍ତି, ଚିଡ଼ଚିଡ଼ାପଣ, ଅସ୍ପଷ୍ଟ ଦୃଷ୍ଟି, ଧୀରେ ଧୀରେ ଆରୋଗ୍ୟ କ୍ଷତ, ଏବଂ ବାରମ୍ବାର ସଂକ୍ରମଣ ଅନ୍ତର୍ଭୁକ୍ତ।',
            'ପରିଚାଳନା ରଣନୀତିଗୁଡ଼ିକ ମଧ୍ୟରେ ରକ୍ତ ଚିନି ସ୍ତରର ନିୟମିତ ନିରୀକ୍ଷଣ, ନିର୍ଦ୍ଦେଶିତ ଅନୁଯାୟୀ ଔଷଧ ଗ୍ରହଣ, ସ୍ୱାସ୍ଥ୍ୟକର ଖାଦ୍ୟ ଅନୁସରଣ, ନିୟମିତ ଶାରୀରିକ କାର୍ଯ୍ୟକଳାପରେ ଜଡ଼ିତ ରହିବା, ଏବଂ ଏକ ସ୍ୱାସ୍ଥ୍ୟକର ଓଜନ ବଜାୟ ରଖିବା ଅନ୍ତର୍ଭୁକ୍ତ।',
        ],
        content_hi: [
            'मधुमेह एक दीर्घकालिक स्वास्थ्य स्थिति है जो प्रभावित करती है कि आपका शरीर भोजन को ऊर्जा में कैसे बदलता है। आपके द्वारा खाए जाने वाले अधिकांश भोजन को शर्करा (ग्लूकोज) में तोड़ दिया जाता है और आपके रक्तप्रवाह में छोड़ दिया जाता है। जब आपका रक्त शर्करा बढ़ जाता है, तो यह आपके अग्न्याशय को इंसुलिन छोड़ने का संकेत देता है।',
            'मधुमेह के तीन मुख्य प्रकार हैं: टाइप 1, टाइप 2, और गर्भकालीन मधुमेह। टाइप 1 मधुमेह एक स्वप्रतिरक्षी प्रतिक्रिया के कारण होता है जो आपके शरीर को इंसुलिन बनाने से रोकता है। टाइप 2 मधुमेह तब होता है जब आपका शरीर इंसुलिन के प्रति प्रतिरोधी हो जाता है या पर्याप्त इंसुलिन नहीं बनाता है। गर्भकालीन मधुमेह गर्भवती महिलाओं में विकसित होता है जिन्हें पहले कभी मधुमेह नहीं था।',
            'मधुमेह के सामान्य लक्षणों में बढ़ी हुई प्यास, बार-बार पेशाब आना, अत्यधिक भूख, अस्पष्टीकृत वजन घटना, थकान, चिड़चिड़ापन, धुंधली दृष्टि, धीरे-धीरे भरने वाले घाव और बार-बार संक्रमण शामिल हैं।',
            'प्रबंधन रणनीतियों में रक्त शर्करा के स्तर की नियमित निगरानी, निर्धारित दवाओं का सेवन, स्वस्थ आहार का पालन, नियमित शारीरिक गतिविधि में संलग्न होना और स्वस्थ वजन बनाए रखना शामिल है।',
        ],
    },
    {
        id: 2,
        title: 'The Importance of Mental Health Awareness',
        title_od: 'ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ ସଚେତନତାର ଗୁରୁତ୍ୱ',
        title_hi: 'मानसिक स्वास्थ्य जागरूकता का महत्व',
        summary:
            'Discover why mental health is just as important as physical health and how to recognize signs of common mental health issues.',
        summary_od:
            'ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ କାହିଁକି ଶାରୀରିକ ସ୍ୱାସ୍ଥ୍ୟ ଭଳି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଏବଂ କିପରି ସାଧାରଣ ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ ସମସ୍ୟାଗୁଡ଼ିକର ଲକ୍ଷଣ ଚିହ୍ନିବେ ତାହା ଜାଣନ୍ତୁ।',
        summary_hi:
            'जानें कि मानसिक स्वास्थ्य शारीरिक स्वास्थ्य के समान ही क्यों महत्वपूर्ण है और सामान्य मानसिक स्वास्थ्य समस्याओं के लक्षणों को कैसे पहचानें।',
        image:
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        category: 'Mental Health',
        content: [
            'Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.',
            'Many factors contribute to mental health problems, including biological factors such as genes or brain chemistry, life experiences such as trauma or abuse, and family history of mental health problems.',
            'Common signs of mental health issues include feeling sad or down, confused thinking, excessive fears or worries, extreme mood changes, withdrawal from friends and activities, significant tiredness, detachment from reality, inability to cope with daily problems or stress, and substance abuse.',
            'Maintaining positive mental health involves connecting with others, staying physically active, helping others, getting enough sleep, developing coping skills, and seeking professional help when needed.',
        ],
        content_od: [
            'ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟରେ ଆମର ଭାବନାତ୍ମକ, ମନୋବୈଜ୍ଞାନିକ ଏବଂ ସାମାଜିକ କଲ୍ୟାଣ ଅନ୍ତର୍ଭୁକ୍ତ। ଏହା ଆମେ କିପରି ଚିନ୍ତା କରୁ, ଅନୁଭବ କରୁ ଏବଂ କାର୍ଯ୍ୟ କରୁ ତାକୁ ପ୍ରଭାବିତ କରେ। ଏହା ମଧ୍ୟ ଆମେ କିପରି ମାନସିକ ଚାପ ସମ୍ଭାଳୁ, ଅନ୍ୟମାନଙ୍କ ସହ ସମ୍ପର୍କ ରଖୁ, ଏବଂ ବିକଳ୍ପ ବାଛୁ ତାହା ନିର୍ଧାରଣ କରିବାରେ ସାହାଯ୍ୟ କରେ। ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ ଜୀବନର ପ୍ରତ୍ୟେକ ପର୍ଯ୍ୟାୟରେ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ, ଶୈଶବ ଏବଂ କିଶୋରାବସ୍ଥାରୁ ପ୍ରାପ୍ତବୟସ୍କ ପର୍ଯ୍ୟନ୍ତ।',
            'ଅନେକ କାରଣ ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ ସମସ୍ୟାରେ ଅବଦାନ ଦିଏ, ଯେପରିକି ଜିନ୍ କିମ୍ବା ମସ୍ତିଷ୍କ ରସାୟନ ଭଳି ଜୈବିକ କାରଣ, ଆଘାତ କିମ୍ବା ଅପବ୍ୟବହାର ଭଳି ଜୀବନ ଅନୁଭବ, ଏବଂ ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ ସମସ୍ୟାର ପାରିବାରିକ ଇତିହାସ।',
            'ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ ସମସ୍ୟାର ସାଧାରଣ ଲକ୍ଷଣଗୁଡ଼ିକ ମଧ୍ୟରେ ଦୁଃଖ କିମ୍ବା ଅବସାଦ ଅନୁଭବ କରିବା, ବିଭ୍ରାନ୍ତ ଚିନ୍ତାଧାରା, ଅତ୍ୟଧିକ ଭୟ କିମ୍ବା ଚିନ୍ତା, ଅତ୍ୟଧିକ ମୁଡ୍ ପରିବର୍ତ୍ତନ, ବନ୍ଧୁ ଏବଂ କାର୍ଯ୍ୟକଳାପରୁ ପ୍ରତ୍ୟାହାର, ଉଲ୍ଲେଖନୀୟ କ୍ଳାନ୍ତି, ବାସ୍ତବତାରୁ ବିଚ୍ଛିନ୍ନତା, ଦୈନନ୍ଦିନ ସମସ୍ୟା କିମ୍ବା ମାନସିକ ଚାପ ସହିତ ମୁକାବିଲା କରିବାରେ ଅକ୍ଷମତା, ଏବଂ ମାଦକ ଦ୍ରବ୍ୟ ଅପବ୍ୟବହାର ଅନ୍ତର୍ଭୁକ୍ତ।',
            'ସକାରାତ୍ମକ ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ ବଜାୟ ରଖିବାପାଇଁ ଅନ୍ୟମାନଙ୍କ ସହ ସଂଯୋଗ ସ୍ଥାପନ କରିବା, ଶାରୀରିକ ଭାବରେ ସକ୍ରିୟ ରହିବା, ଅନ୍ୟମାନଙ୍କୁ ସାହାଯ୍ୟ କରିବା, ପର୍ଯ୍ୟାପ୍ତ ନିଦ୍ରା ନେବା, ମୁକାବିଲା ଦକ୍ଷତା ବିକଶିତ କରିବା, ଏବଂ ଆବଶ୍ୟକ ସ୍ଥଳେ ପେଶାଦାର ସାହାଯ୍ୟ ନେବା ଅନ୍ତର୍ଭୁକ୍ତ।',
        ],
        content_hi: [
            'मानसिक स्वास्थ्य में हमारी भावनात्मक, मनोवैज्ञानिक और सामाजिक भलाई शामिल है। यह प्रभावित करता है कि हम कैसे सोचते, महसूस करते और कार्य करते हैं। यह यह भी निर्धारित करने में मदद करता है कि हम तनाव का सामना कैसे करते हैं, दूसरों से कैसे संबंधित होते हैं और विकल्प कैसे चुनते हैं। मानसिक स्वास्थ्य जीवन के हर चरण में महत्वपूर्ण है, बचपन और किशोरावस्था से लेकर वयस्कता तक।',
            'कई कारक मानसिक स्वास्थ्य समस्याओं में योगदान देते हैं, जिनमें जीन या मस्तिष्क रसायन जैसे जैविक कारक, आघात या दुर्व्यवहार जैसे जीवन अनुभव, और मानसिक स्वास्थ्य समस्याओं का पारिवारिक इतिहास शामिल है।',
            'मानसिक स्वास्थ्य समस्याओं के सामान्य लक्षणों में उदास या निराश महसूस करना, भ्रमित सोच, अत्यधिक डर या चिंता, मूड में अत्यधिक परिवर्तन, दोस्तों और गतिविधियों से दूरी, महत्वपूर्ण थकान, वास्तविकता से अलगाव, दैनिक समस्याओं या तनाव से निपटने में असमर्थता, और नशीली दवाओं का सेवन शामिल है।',
            'सकारात्मक मानसिक स्वास्थ्य बनाए रखने में दूसरों से जुड़ना, शारीरिक रूप से सक्रिय रहना, दूसरों की मदद करना, पर्याप्त नींद लेना, सामना करने के कौशल विकसित करना और जब आवश्यक हो पेशेवर मदद लेना शामिल है।',
        ],
    },
    {
        id: 3,
        title: 'Nutrition Basics: Building a Balanced Diet',
        title_od: 'ପୁଷ୍ଟି ମୂଳତତ୍ତ୍ୱ: ଏକ ସନ୍ତୁଳିତ ଖାଦ୍ୟ ନିର୍ମାଣ',
        title_hi: 'पोषण की बुनियादी बातें: एक संतुलित आहार बनाना',
        summary:
            "Learn the fundamentals of good nutrition and how to create a balanced diet that meets your body's needs.",
        summary_od:
            'ଉତ୍ତମ ପୁଷ୍ଟିର ମୂଳ ତତ୍ତ୍ୱ ଏବଂ ଆପଣଙ୍କ ଶରୀରର ଆବଶ୍ୟକତାକୁ ପୂରଣ କରୁଥିବା ଏକ ସନ୍ତୁଳିତ ଖାଦ୍ୟ କିପରି ତିଆରି କରିବେ ତାହା ଜାଣନ୍ତୁ।',
        summary_hi:
            'अच्छे पोषण के मूल सिद्धांतों और अपने शरीर की जरूरतों को पूरा करने वाला संतुलित आहार कैसे बनाएं, यह जानें।',
        image:
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        category: 'Nutrition',
        content: [
            'A balanced diet provides your body with the nutrients it needs to function properly. To get the nutrition you need, most of your daily calories should come from fresh fruits and vegetables, whole grains, lean proteins, and low-fat dairy.',
            'The key components of a balanced diet include carbohydrates, which provide energy; proteins, which are essential for growth and repair of tissues; fats, which support cell growth and protect organs; vitamins and minerals, which are vital for many body processes; and water, which is necessary for almost all bodily functions.',
            "The concept of balance involves eating the right amounts of different food groups. According to the USDA's MyPlate guidelines, half your plate should be fruits and vegetables, one quarter should be protein, and one quarter should be grains, preferably whole grains. A serving of dairy on the side completes the meal.",
            'Portion control is also an important aspect of a balanced diet. Even healthy foods can lead to weight gain when consumed in large quantities. Learning to recognize appropriate portion sizes can help you maintain a healthy weight.',
        ],
        content_od: [
            'ଏକ ସନ୍ତୁଳିତ ଖାଦ୍ୟ ଆପଣଙ୍କ ଶରୀରକୁ ସଠିକ୍ ଭାବରେ କାର୍ଯ୍ୟ କରିବା ପାଇଁ ଆବଶ୍ୟକ ପୁଷ୍ଟିସାର ପ୍ରଦାନ କରେ। ଆପଣ ଆବଶ୍ୟକ କରୁଥିବା ପୁଷ୍ଟି ପାଇବା ପାଇଁ, ଆପଣଙ୍କ ଦୈନିକ କ୍ୟାଲୋରୀର ଅଧିକାଂଶ ତାଜା ଫଳ ଏବଂ ପନିପରିବା, ସମ୍ପୂର୍ଣ୍ଣ ଶସ୍ୟ, ଲିନ୍ ପ୍ରୋଟିନ୍, ଏବଂ କମ୍-ଚର୍ବିଯୁକ୍ତ ଦୁଗ୍ଧଜାତ ଖାଦ୍ୟରୁ ଆସିବା ଉଚିତ।',
            'ଏକ ସନ୍ତୁଳିତ ଖାଦ୍ୟର ମୁଖ୍ୟ ଉପାଦାନଗୁଡିକ ମଧ୍ୟରେ କାର୍ବୋହାଇଡ୍ରେଟ୍ ଅନ୍ତର୍ଭୁକ୍ତ, ଯାହା ଶକ୍ତି ପ୍ରଦାନ କରେ; ପ୍ରୋଟିନ୍, ଯାହା ଟିସୁର ବୃଦ୍ଧି ଏବଂ ମରାମତି ପାଇଁ ଅତ୍ୟାବଶ୍ୟକ; ଚର୍ବି, ଯାହା କୋଷିକା ବୃଦ୍ଧିକୁ ସମର୍ଥନ କରେ ଏବଂ ଅଙ୍ଗଗୁଡିକୁ ସୁରକ୍ଷା କରେ; ଭିଟାମିନ୍ ଏବଂ ଖନିଜ, ଯାହା ଅନେକ ଶାରୀରିକ ପ୍ରକ୍ରିୟା ପାଇଁ ଅତ୍ୟନ୍ତ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ; ଏବଂ ପାଣି, ଯାହା ପ୍ରାୟ ସମସ୍ତ ଶାରୀରିକ କାର୍ଯ୍ୟ ପାଇଁ ଆବଶ୍ୟକ।',
            'ସନ୍ତୁଳନର ଧାରଣାରେ ବିଭିନ୍ନ ଖାଦ୍ୟ ଗୋଷ୍ଠୀର ସଠିକ୍ ପରିମାଣ ଖାଇବା ଜଡିତ। USDA ର ମାଇପ୍ଲେଟ୍ ନିର୍ଦ୍ଦେଶାବଳୀ ଅନୁଯାୟୀ, ଆପଣଙ୍କ ପ୍ଲେଟର ଅଧା ଫଳ ଏବଂ ପନିପରିବା ହେବା ଉଚିତ, ଏକ ଚତୁର୍ଥାଂଶ ପ୍ରୋଟିନ୍ ହେବା ଉଚିତ, ଏବଂ ଏକ ଚତୁର୍ଥାଂଶ ଶସ୍ୟ, ଅଗ୍ରାଧିକାର ଭାବରେ ସମ୍ପୂର୍ଣ୍ଣ ଶସ୍ୟ ହେବା ଉଚିତ। ପାର୍ଶ୍ୱରେ ଏକ ଦୁଗ୍ଧଜାତ ଖାଦ୍ୟ ଖାଦ୍ୟକୁ ସମ୍ପୂର୍ଣ୍ଣ କରେ।',
            'ପୋର୍ସନ୍ ନିୟନ୍ତ୍ରଣ ମଧ୍ୟ ଏକ ସନ୍ତୁଳିତ ଖାଦ୍ୟର ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଦିଗ। ବଡ଼ ପରିମାଣରେ ଗ୍ରହଣ କଲାବେଳେ ଏପରିକି ସ୍ୱାସ୍ଥ୍ୟକର ଖାଦ୍ୟ ମଧ୍ୟ ଓଜନ ବୃଦ୍ଧି କରିପାରେ। ଉପଯୁକ୍ତ ପୋର୍ସନ୍ ଆକାର ଚିହ୍ନିବାକୁ ଶିଖିବା ଆପଣଙ୍କୁ ଏକ ସ୍ୱାସ୍ଥ୍ୟକର ଓଜନ ବଜାୟ ରଖିବାରେ ସାହାଯ୍ୟ କରିପାରେ।',
        ],
        content_hi: [
            'एक संतुलित आहार आपके शरीर को उन पोषक तत्वों को प्रदान करता है जिनकी उसे ठीक से काम करने के लिए आवश्यकता होती है। आपको आवश्यक पोषण प्राप्त करने के लिए, आपके दैनिक कैलोरी का अधिकांश भाग ताजे फलों और सब्जियों, साबुत अनाज, दुबले प्रोटीन और कम वसा वाले डेयरी उत्पादों से आना चाहिए।',
            'संतुलित आहार के प्रमुख घटकों में कार्बोहाइड्रेट शामिल हैं, जो ऊर्जा प्रदान करते हैं; प्रोटीन, जो ऊतकों के विकास और मरम्मत के लिए आवश्यक हैं; वसा, जो कोशिका वृद्धि का समर्थन करती है और अंगों की रक्षा करती है; विटामिन और खनिज, जो कई शारीरिक प्रक्रियाओं के लिए महत्वपूर्ण हैं; और पानी, जो लगभग सभी शारीरिक कार्यों के लिए आवश्यक है।',
            'संतुलन की अवधारणा में विभिन्न खाद्य समूहों की सही मात्रा का सेवन करना शामिल है। USDA के माईप्लेट दिशानिर्देशों के अनुसार, आपकी प्लेट का आधा हिस्सा फल और सब्जियां होना चाहिए, एक चौथाई प्रोटीन होना चाहिए, और एक चौथाई अनाज, अधिमानतः साबुत अनाज होना चाहिए। साथ में डेयरी का एक सर्विंग भोजन को पूरा करता है।',
            'पोर्शन नियंत्रण भी एक संतुलित आहार का एक महत्वपूर्ण पहलू है। बड़ी मात्रा में खाए जाने पर स्वस्थ खाद्य पदार्थ भी वजन बढ़ा सकते हैं। उचित पोर्शन साइज को पहचानना सीखना आपको एक स्वस्थ वजन बनाए रखने में मदद कर सकता है।',
        ],
    },
]
// Health quizzes
export const healthQuizzes = [
    {
        id: 1,
        title: 'Basic Nutrition Knowledge',
        title_od: 'ମୌଳିକ ପୁଷ୍ଟି ଜ୍ଞାନ',
        title_hi: 'बुनियादी पोषण ज्ञान',
        description:
            'Test your understanding of basic nutrition principles and healthy eating habits.',
        description_od:
            'ମୌଳିକ ପୁଷ୍ଟି ନୀତି ଏବଂ ସ୍ୱାସ୍ଥ୍ୟକର ଖାଇବା ଅଭ୍ୟାସର ଆପଣଙ୍କ ବୁଝାମଣା ପରୀକ୍ଷା କରନ୍ତୁ।',
        description_hi:
            'बुनियादी पोषण सिद्धांतों और स्वस्थ खाने की आदतों की अपनी समझ का परीक्षण करें।',
        questions: [
            {
                question: 'Which of the following is NOT a macronutrient?',
                question_od: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ମ୍ୟାକ୍ରୋନ୍ୟୁଟ୍ରିଏଣ୍ଟ ନୁହେଁ?',
                question_hi: 'निम्नलिखित में से कौन सा मैक्रोन्यूट्रिएंट नहीं है?',
                options: ['Protein', 'Carbohydrates', 'Vitamin C', 'Fat'],
                options_od: ['ପ୍ରୋଟିନ୍', 'କାର୍ବୋହାଇଡ୍ରେଟ୍', 'ଭିଟାମିନ୍ C', 'ଚର୍ବି'],
                options_hi: ['प्रोटीन', 'कार्बोहाइड्रेट', 'विटामिन सी', 'वसा'],
                correctAnswer: 2,
            },
            {
                question:
                    'Which food group should make up the largest portion of your plate according to dietary guidelines?',
                question_od:
                    'ଖାଦ୍ୟ ନିର୍ଦ୍ଦେଶାବଳୀ ଅନୁଯାୟୀ କେଉଁ ଖାଦ୍ୟ ଗ୍ରୁପ୍ ଆପଣଙ୍କ ପ୍ଲେଟର ସବୁଠାରୁ ବଡ଼ ଅଂଶ ଗଠନ କରିବା ଉଚିତ?',
                question_hi:
                    'आहार दिशानिर्देशों के अनुसार कौन सा खाद्य समूह आपकी प्लेट का सबसे बड़ा हिस्सा बनाना चाहिए?',
                options: ['Fruits and vegetables', 'Grains', 'Protein', 'Dairy'],
                options_od: ['ଫଳ ଏବଂ ପନିପରିବା', 'ଶସ୍ୟ', 'ପ୍ରୋଟିନ୍', 'ଦୁଗ୍ଧଜାତ'],
                options_hi: ['फल और सब्जियां', 'अनाज', 'प्रोटीन', 'डेयरी'],
                correctAnswer: 0,
            },
            {
                question:
                    'Which vitamin is primarily produced when your skin is exposed to sunlight?',
                question_od:
                    'ଆପଣଙ୍କ ଚର୍ମ ସୂର୍ଯ୍ୟାଲୋକରେ ପ୍ରକାଶିତ ହେଲେ କେଉଁ ଭିଟାମିନ୍ ମୁଖ୍ୟତଃ ଉତ୍ପାଦିତ ହୁଏ?',
                question_hi:
                    'जब आपकी त्वचा धूप के संपर्क में आती है तो मुख्य रूप से कौन सा विटामिन उत्पादित होता है?',
                options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
                options_od: ['ଭିଟାମିନ୍ A', 'ଭିଟାମିନ୍ C', 'ଭିଟାମିନ୍ D', 'ଭିଟାମିନ୍ K'],
                options_hi: ['विटामिन ए', 'विटामिन सी', 'विटामिन डी', 'विटामिन के'],
                correctAnswer: 2,
            },
        ],
    },
    {
        id: 2,
        title: 'Heart Health Awareness',
        title_od: 'ହୃଦୟ ସ୍ୱାସ୍ଥ୍ୟ ସଚେତନତା',
        title_hi: 'हृदय स्वास्थ्य जागरूकता',
        description: 'How much do you know about maintaining a healthy heart?',
        description_od: 'ଏକ ସ୍ୱାସ୍ଥ୍ୟକର ହୃଦୟ ବଜାୟ ରଖିବା ବିଷୟରେ ଆପଣ କେତେ ଜାଣନ୍ତି?',
        description_hi: 'स्वस्थ हृदय बनाए रखने के बारे में आप कितना जानते हैं?',
        questions: [
            {
                question: 'Which of the following is a risk factor for heart disease?',
                question_od: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ହୃଦ୍‌ରୋଗ ପାଇଁ ଏକ ଝୁଙ୍କି କାରଣ?',
                question_hi: 'निम्नलिखित में से कौन हृदय रोग के लिए एक जोखिम कारक है?',
                options: [
                    'Regular physical activity',
                    'High blood pressure',
                    'Low cholesterol levels',
                    'Eating plenty of fruits and vegetables',
                ],
                options_od: [
                    'ନିୟମିତ ଶାରୀରିକ କାର୍ଯ୍ୟକଳାପ',
                    'ଉଚ୍ଚ ରକ୍ତଚାପ',
                    'କମ୍ କୋଲେଷ୍ଟ୍ରଲ୍ ସ୍ତର',
                    'ପ୍ରଚୁର ଫଳ ଏବଂ ପନିପରିବା ଖାଇବା',
                ],
                options_hi: [
                    'नियमित शारीरिक गतिविधि',
                    'उच्च रक्तचाप',
                    'कम कोलेस्ट्रॉल स्तर',
                    'खूब फल और सब्जियां खाना',
                ],
                correctAnswer: 1,
            },
            {
                question: 'What is a normal resting heart rate for adults?',
                question_od: "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ସାଧାରଣ ବିଶ୍ରାମ ହୃଦୟ ହାର କ'ଣ?",
                question_hi: 'वयस्कों के लिए सामान्य विश्राम हृदय दर क्या है?',
                options: [
                    '40-50 beats per minute',
                    '60-100 beats per minute',
                    '100-120 beats per minute',
                    '120-150 beats per minute',
                ],
                options_od: [
                    'ପ୍ରତି ମିନିଟ୍ 40-50 ବିଟ୍',
                    'ପ୍ରତି ମିନିଟ୍ 60-100 ବିଟ୍',
                    'ପ୍ରତି ମିନିଟ୍ 100-120 ବିଟ୍',
                    'ପ୍ରତି ମିନିଟ୍ 120-150 ବିଟ୍',
                ],
                options_hi: [
                    '40-50 बीट प्रति मिनट',
                    '60-100 बीट प्रति मिनट',
                    '100-120 बीट प्रति मिनट',
                    '120-150 बीट प्रति मिनट',
                ],
                correctAnswer: 1,
            },
            {
                question: 'Which type of fat is considered heart-healthy?',
                question_od: 'କେଉଁ ପ୍ରକାରର ଚର୍ବି ହୃଦୟ-ସ୍ୱାସ୍ଥ୍ୟକର ବୋଲାଯାଏ?',
                question_hi: 'किस प्रकार की वसा को हृदय-स्वस्थ माना जाता है?',
                options: [
                    'Trans fat',
                    'Saturated fat',
                    'Monounsaturated fat',
                    'Hydrogenated fat',
                ],
                options_od: [
                    'ଟ୍ରାନ୍ସ ଚର୍ବି',
                    'ସଂପୃକ୍ତ ଚର୍ବି',
                    'ମନୋସାଚୁରେଟେଡ୍ ଚର୍ବି',
                    'ହାଇଡ୍ରୋଜେନେଟେଡ୍ ଚର୍ବି',
                ],
                options_hi: [
                    'ट्रांस वसा',
                    'संतृप्त वसा',
                    'मोनोअनसैचुरेटेड वसा',
                    'हाइड्रोजनीकृत वसा',
                ],
                correctAnswer: 2,
            },
        ],
    },
]
// Mock API functions
export const mockApi = {
    // Simulate a delay
    delay: (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)),
    // Simulate getting chatbot response
    getChatbotResponse: async (query: string, language: string = 'en') => {
        await mockApi.delay(1000) // Simulate API delay
        // Simple keyword matching for demo purposes
        const lowerQuery = query.toLowerCase()
        // Check for FAQ matches
        for (const faq of faqResponses) {
            const keywords = faq.question.toLowerCase().split(' ')
            if (keywords.some((keyword) => lowerQuery.includes(keyword))) {
                if (language === 'od') return faq.answer_od
                if (language === 'hi') return faq.answer_hi
                return faq.answer
            }
        }
        // Check for symptom matches
        for (const symptom of symptoms) {
            const symptomName = symptom.name.toLowerCase()
            if (lowerQuery.includes(symptomName)) {
                const relatedConditions = conditions.filter((c) =>
                    c.symptoms.includes(symptom.id),
                )
                if (relatedConditions.length > 0) {
                    let response = ''
                    if (language === 'od') {
                        response = `ଏହି ଲକ୍ଷଣ ନିମ୍ନଲିଖିତ ଅବସ୍ଥା ସହିତ ଜଡ଼ିତ ହୋଇପାରେ: ${relatedConditions.map((c) => c.name_od).join(', ')}. ଦୟାକରି ଅଧିକ ନିର୍ଦ୍ଦିଷ୍ଟ ନିଦାନ ପାଇଁ ଏକ ଡାକ୍ତରଙ୍କ ସହିତ ପରାମର୍ଶ କରନ୍ତୁ।`
                    } else if (language === 'hi') {
                        response = `यह लक्षण निम्नलिखित स्थितियों से जुड़ा हो सकता है: ${relatedConditions.map((c) => c.name_hi).join(', ')}. कृपया अधिक विशिष्ट निदान के लिए डॉक्टर से परामर्श करें।`
                    } else {
                        response = `This symptom may be associated with the following conditions: ${relatedConditions.map((c) => c.name).join(', ')}. Please consult a doctor for a more specific diagnosis.`
                    }
                    return response
                }
            }
        }
        // Check for health tips
        if (
            lowerQuery.includes('tip') ||
            lowerQuery.includes('advice') ||
            lowerQuery.includes('recommend')
        ) {
            const randomTip =
                healthTips[Math.floor(Math.random() * healthTips.length)]
            if (language === 'od') {
                return `स्वास्थ्य टिप: ${randomTip.tip_od}`
            } else if (language === 'hi') {
                return `स्वास्थ्य सलाह: ${randomTip.tip_hi}`
            } else {
                return `Health tip: ${randomTip.tip}`
            }
        }
        // Check for first aid queries
        if (
            lowerQuery.includes('first aid') ||
            lowerQuery.includes('emergency') ||
            lowerQuery.includes('help')
        ) {
            for (const tip of firstAidTips) {
                const keywords = [tip.title.toLowerCase()]
                if (keywords.some((keyword) => lowerQuery.includes(keyword))) {
                    if (language === 'od') {
                        return `${tip.title_od}: ${tip.steps_od.join('. ')}`
                    } else if (language === 'hi') {
                        return `${tip.title_hi}: ${tip.steps_hi.join('. ')}`
                    } else {
                        return `${tip.title}: ${tip.steps.join('. ')}`
                    }
                }
            }
        }
        // Check for medication queries
        if (
            lowerQuery.includes('medicine') ||
            lowerQuery.includes('medication') ||
            lowerQuery.includes('drug')
        ) {
            if (language === 'od') {
                return 'ଔଷଧ ସମ୍ବନ୍ଧୀୟ ପ୍ରଶ୍ନ ପାଇଁ, ଦୟାକରି ଆପଣଙ୍କ ଡାକ୍ତର କିମ୍ବା ଫାର୍ମାସିଷ୍ଟଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ। ମୁଁ ଆପଣଙ୍କୁ ଔଷଧ ରିମାଇଣ୍ଡର ସେଟ୍ କରିବାରେ ସାହାଯ୍ୟ କରିପାରିବି।'
            } else if (language === 'hi') {
                return 'दवा संबंधी प्रश्नों के लिए, कृपया अपने डॉक्टर या फार्मासिस्ट से परामर्श करें। मैं आपको दवा रिमाइंडर सेट करने में मदद कर सकता हूं।'
            } else {
                return 'For medication-related questions, please consult your doctor or pharmacist. I can help you set up medication reminders.'
            }
        }
        // Check for general health questions
        if (
            lowerQuery.includes('health') ||
            lowerQuery.includes('wellness') ||
            lowerQuery.includes('diet')
        ) {
            const randomArticle =
                healthArticles[Math.floor(Math.random() * healthArticles.length)]
            if (language === 'od') {
                return `ଆପଣ ${randomArticle.title_od} ବିଷୟରେ ଜାଣିବାକୁ ଚାହିଁ ପାରନ୍ତି। ${randomArticle.summary_od}`
            } else if (language === 'hi') {
                return `आप ${randomArticle.title_hi} के बारे में जानना चाह सकते हैं। ${randomArticle.summary_hi}`
            } else {
                return `You might be interested in learning about ${randomArticle.title}. ${randomArticle.summary}`
            }
        }
        // Default responses based on query context
        if (
            lowerQuery.includes('hello') ||
            lowerQuery.includes('hi') ||
            lowerQuery.includes('hey')
        ) {
            if (language === 'od') {
                return 'ନମସ୍କାର! ମୁଁ ଆପଣଙ୍କୁ ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରଶ୍ନଗୁଡ଼ିକରେ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?'
            } else if (language === 'hi') {
                return 'नमस्ते! मैं आपके स्वास्थ्य प्रश्नों में आपकी कैसे सहायता कर सकता हूं?'
            } else {
                return 'Hello! How can I help you with your health questions today?'
            }
        }
        // Truly default responses if nothing else matches
        if (language === 'od') {
            return 'ମୁଁ ଆପଣଙ୍କ ପ୍ରଶ୍ନକୁ ବୁଝିପାରିଲି ନାହିଁ। ଦୟାକରି ଆପଣଙ୍କର ସ୍ୱାସ୍ଥ୍ୟ ଚିନ୍ତା ବିଷୟରେ ଅଧିକ ବିବରଣୀ ପ୍ରଦାନ କରନ୍ତୁ କିମ୍ବା ଆପଣଙ୍କ ନିକଟତମ ସ୍ୱାସ୍ଥ୍ୟସେବା କେନ୍ଦ୍ରରେ ଯାଞ୍ଚ କରନ୍ତୁ।'
        } else if (language === 'hi') {
            return 'मैं आपके प्रश्न को समझ नहीं पाया। कृपया अपनी स्वास्थ्य चिंताओं के बारे में अधिक विवरण प्रदान करें या अपने निकटतम स्वास्थ्य केंद्र में जांच कराएं।'
        } else {
            return "I'm here to help with your health questions. Could you please provide more details about your health concern? You can ask about symptoms, first aid, health tips, or specific conditions."
        }
    },
    // Simulate speech recognition
    startSpeechRecognition: async (language: string = 'en') => {
        await mockApi.delay(2000) // Simulate recording time
        // Mock responses based on language
        if (language === 'od') {
            return 'ମୋର ମୁଣ୍ଡ ବିନ୍ଧୁछି ଏବଂ ଜ୍ୱର ଅଛି'
        } else if (language === 'hi') {
            return 'मेरे सिर में दर्द है और बुखार है'
        } else {
            return 'I have a headache and fever'
        }
    },
    // Simulate text-to-speech
    speakText: async (text: string, language: string = 'en') => {
        console.log(`Speaking in ${language}: ${text}`)
        await mockApi.delay(1000) // Simulate speech duration
        return true
    },
    // Get nearby hospitals (mock)
    getNearbyHospitals: async (language: string = 'en') => {
        await mockApi.delay(1000)
        return hospitals.map((hospital) => {
            if (language === 'od') {
                return {
                    ...hospital,
                    name: hospital.name_od,
                    address: hospital.address_od,
                }
            } else if (language === 'hi') {
                return {
                    ...hospital,
                    name: hospital.name_hi,
                    address: hospital.address_hi,
                }
            }
            return {
                ...hospital,
                name: hospital.name,
                address: hospital.address,
            }
        })
    },
    // New API functions for offline support
    saveToLocalStorage: (key: string, data: any) => {
        try {
            localStorage.setItem(key, JSON.stringify(data))
            return true
        } catch (error) {
            console.error('Error saving to localStorage:', error)
            return false
        }
    },
    getFromLocalStorage: (key: string) => {
        try {
            const data = localStorage.getItem(key)
            return data ? JSON.parse(data) : null
        } catch (error) {
            console.error('Error getting from localStorage:', error)
            return null
        }
    },
    // Simulate notifications
    sendNotification: async (
        title: string,
        message: string,
        isOnline: boolean = true,
    ) => {
        if (isOnline) {
            // Simulate online notification
            console.log(`Online notification sent: ${title} - ${message}`)
            return { success: true, method: 'online' }
        } else {
            // Simulate offline notification (would use local notification)
            console.log(`Offline notification triggered: ${title} - ${message}`)
            return { success: true, method: 'offline' }
        }
    },
    // Calculate BMI
    calculateBMI: (weight: number, height: number) => {
        // Weight in kg, height in cm
        const heightInMeters = height / 100
        const bmi = weight / (heightInMeters * heightInMeters)
        return parseFloat(bmi.toFixed(1))
    },
    // Calculate daily calorie needs
    calculateCalories: (
        weight: number,
        height: number,
        age: number,
        gender: string,
        activityLevel: string,
    ) => {
        // Basic BMR calculation using Mifflin-St Jeor Equation
        const heightInCm = height
        const weightInKg = weight
        let bmr = 0
        if (gender === 'male') {
            bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5
        } else {
            bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161
        }
        // Activity multipliers
        const activityMultipliers = {
            sedentary: 1.2,
            light: 1.375,
            moderate: 1.55,
            active: 1.725,
            'very-active': 1.9,
        }
        const calories =
            bmr *
            (activityMultipliers[activityLevel as keyof typeof activityMultipliers] ||
                1.2)
        return Math.round(calories)
    },
    // Calculate daily water needs
    calculateWaterNeeds: (weight: number, activityLevel: string) => {
        // Basic calculation: weight in kg * multiplier based on activity
        const activityMultipliers = {
            sedentary: 30,
            light: 35,
            moderate: 40,
            active: 45,
            'very-active': 50,
        }
        const waterInMl =
            weight *
            (activityMultipliers[activityLevel as keyof typeof activityMultipliers] ||
                30)
        return Math.round(waterInMl)
    },
    // Database simulation for storing chat history and user data
    database: {
        // Store chat history
        saveChatHistory: (userId: string, messages: any[]) => {
            try {
                localStorage.setItem(`chat_history_${userId}`, JSON.stringify(messages))
                return true
            } catch (error) {
                console.error('Error saving chat history:', error)
                return false
            }
        },
        // Get chat history
        getChatHistory: (userId: string) => {
            try {
                const history = localStorage.getItem(`chat_history_${userId}`)
                return history ? JSON.parse(history) : []
            } catch (error) {
                console.error('Error retrieving chat history:', error)
                return []
            }
        },
        // Save user symptoms
        saveUserSymptoms: (userId: string, symptomIds: number[]) => {
            try {
                localStorage.setItem(
                    `user_symptoms_${userId}`,
                    JSON.stringify(symptomIds),
                )
                return true
            } catch (error) {
                console.error('Error saving user symptoms:', error)
                return false
            }
        },
        // Get user symptoms
        getUserSymptoms: (userId: string) => {
            try {
                const symptomIds = localStorage.getItem(`user_symptoms_${userId}`)
                return symptomIds ? JSON.parse(symptomIds) : []
            } catch (error) {
                console.error('Error retrieving user symptoms:', error)
                return []
            }
        },
    },
}
// Default medications for the reminder system
export const defaultMedications = [
    {
        id: '1',
        name: 'Aspirin',
        dosage: '81 mg',
        frequency: 'Once daily',
        time: '08:00',
        instructions: 'Take with food',
        startDate: new Date().toISOString().split('T')[0],
        endDate: '',
    },
    {
        id: '2',
        name: 'Vitamin D',
        dosage: '1000 IU',
        frequency: 'Once daily',
        time: '09:00',
        instructions: 'Take with breakfast',
        startDate: new Date().toISOString().split('T')[0],
        endDate: '',
    },
]
// Default journal entries
export const defaultJournalEntries = [
    {
        id: '1',
        date: new Date().toISOString().split('T')[0],
        mood: 'Good',
        sleep: 7,
        water: 6,
        exercise: 30,
        notes: 'Felt energetic today. Went for a morning walk.',
    },
    {
        id: '2',
        date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
        mood: 'Average',
        sleep: 6,
        water: 5,
        exercise: 0,
        notes: "Busy day at work. Didn't get time for exercise.",
    },
]
