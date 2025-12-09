// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import axios from 'axios';
// --- English translations ---
const enTranslations = {
    header: {
        title: 'Health Companion',
        home: 'Home',
        tools: 'Health Tools',
        resources: 'Resources',
        support: 'Local Support',
    },
    home: {
        welcome: 'Your Health Companion',
        subtitle: 'AI-powered health information and resources',
        chatbotPrompt: 'Ask me about your health concerns',
        featuredTools: 'Featured Tools',
        emergencyTitle: 'Emergency?',
        emergencyText: 'Call these numbers for immediate help',
    },
    chatbot: {
        placeholder: 'Type your health question here...',
        greeting: 'Hello! How can I help you with your health concerns today?',
        speak: 'Speak',
        send: 'Send',
        loading: 'Thinking...',
    },
    tools: {
        symptomChecker: 'Symptom Checker',
        firstAid: 'First Aid Tips',
        medicationReminder: 'Medication Reminder',
        healthCalculators: 'Health Calculators',
        dailyTips: 'Daily Health Tips',
    },
    symptomChecker: {
        title: 'Symptom Checker',
        disclaimer:
            'This is not a medical diagnosis. Please consult a healthcare professional.',
        enterSymptoms: 'Enter your symptoms',
        checkButton: 'Check Symptoms',
        results: 'Possible conditions',
        severity: 'Severity',
    },
    firstAid: {
        title: 'First Aid Tips',
        burns: 'Burns',
        cuts: 'Cuts and Wounds',
        fractures: 'Fractures',
        choking: 'Choking',
        snakeBite: 'Snake Bite',
        heatStroke: 'Heat Stroke',
    },
    localSupport: {
        findHospitals: 'Find Nearby Hospitals',
        emergencyContacts: 'Emergency Contacts',
        ambulance: 'Ambulance',
        mentalHealth: 'Mental Health Helpline',
        womenSafety: 'Women Safety Helpline',
        childHelpline: 'Child Helpline',
    },
    footer: {
        disclaimer:
            'Health information provided is for educational purposes only and not a substitute for professional medical advice.',
        sources: 'Information sourced from WHO, CDC, and Ministry of Health India',
        rights: 'All rights reserved',
        accessibility: 'Accessibility Statement',
    },
};

// --- Odia translations ---
const odTranslations = {
    header: {
        title: 'ସ୍ୱାସ୍ଥ୍ୟ ସାଥୀ',
        home: 'ମୁଖ୍ୟ ପୃଷ୍ଠା',
        tools: 'ସ୍ୱାସ୍ଥ୍ୟ ଉପକରଣ',
        resources: 'ସମ୍ବଳ',
        support: 'ସ୍ଥାନୀୟ ସହାୟତା',
    },
    home: {
        welcome: 'ଆପଣଙ୍କର ସ୍ୱାସ୍ଥ୍ୟ ସାଥୀ',
        subtitle: 'AI-ଶକ୍ତି ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନା ଏବଂ ସମ୍ବଳ',
        chatbotPrompt: 'ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଚିନ୍ତା ବିଷୟରେ ମୋତେ ପଚାରନ୍ତୁ',
        featuredTools: 'ପ୍ରମୁଖ ଉପକରଣ',
        emergencyTitle: 'ଜରୁରୀକାଳୀନ?',
        emergencyText: 'ତୁରନ୍ତ ସାହାଯ୍ୟ ପାଇଁ ଏହି ନମ୍ବରଗୁଡିକୁ କଲ୍ କରନ୍ତୁ',
    },
    chatbot: {
        placeholder: 'ଆପଣଙ୍କର ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରଶ୍ନ ଏଠାରେ ଟାଇପ୍ କରନ୍ତୁ...',
        greeting:
            'ନମସ୍କାର! ମୁଁ ଆପଣଙ୍କୁ ଆପଣଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଚିନ୍ତାରେ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?',
        speak: 'କୁହନ୍ତୁ',
        send: 'ପଠାନ୍ତୁ',
        loading: 'ଭାବୁଛି...',
    },
    tools: {
        symptomChecker: 'ଲକ୍ଷଣ ଯାଞ୍ଚକାରୀ',
        firstAid: 'ପ୍ରାଥମିକ ଚିକିତ୍ସା ଟିପ୍ସ',
        medicationReminder: 'ଔଷଧ ରିମାଇଣ୍ଡର',
        healthCalculators: 'ସ୍ୱାସ୍ଥ୍ୟ କ୍ୟାଲକୁଲେଟର',
        dailyTips: 'ଦୈନିକ ସ୍ୱାସ୍ଥ୍ୟ ଟିପ୍ସ',
    },
    symptomChecker: {
        title: 'ଲକ୍ଷଣ ଯାଞ୍ଚକାରୀ',
        disclaimer:
            'ଏହା ଏକ ଚିକିତ୍ସା ନିଦାନ ନୁହେଁ। ଦୟାକରି ଏକ ସ୍ୱାସ୍ଥ୍ୟସେବା ପେଶାଦାରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ।',
        enterSymptoms: 'ଆପଣଙ୍କର ଲକ୍ଷଣଗୁଡ଼ିକ ପ୍ରବେଶ କରନ୍ତୁ',
        checkButton: 'ଲକ୍ଷଣଗୁଡ଼ିକ ଯାଞ୍ଚ କରନ୍ତୁ',
        results: 'ସମ୍ଭାବ୍ୟ ସ୍ଥିତି',
        severity: 'ଗମ୍ଭୀରତା',
    },
    firstAid: {
        title: 'ପ୍ରାଥମିକ ଚିକିତ୍ସା ଟିପ୍ସ',
        burns: 'ଜଳିବା',
        cuts: 'କଟା ଏବଂ କ୍ଷତ',
        fractures: 'ଭଙ୍ଗା',
        choking: 'ଶ୍ୱାସରୋଧ',
        snakeBite: 'ସାପ କାମୁଡ଼ିବା',
        heatStroke: 'ଗରମ ଷ୍ଟ୍ରୋକ୍',
    },
    localSupport: {
        findHospitals: 'ନିକଟସ୍ଥ ହସ୍ପିଟାଲ ଖୋଜନ୍ତୁ',
        emergencyContacts: 'ଜରୁରୀକାଳୀନ ଯୋଗାଯୋଗ',
        ambulance: 'ଆମ୍ବୁଲାନ୍ସ',
        mentalHealth: 'ମାନସିକ ସ୍ୱାସ୍ଥ୍ୟ ହେଲ୍ପଲାଇନ୍',
        womenSafety: 'ମହିଳା ସୁରକ୍ଷା ହେଲ୍ପଲାଇନ୍',
        childHelpline: 'ଶିଶୁ ହେଲ୍ପଲାଇନ୍',
    },
    footer: {
        disclaimer:
            'ପ୍ରଦାନ କରାଯାଇଥିବା ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନା କେବଳ ଶିକ୍ଷାଗତ ଉଦ୍ଦେଶ୍ୟ ପାଇଁ ଏବଂ ପେଶାଦାର ଚିକିତ୍ସା ପରାମର୍ଶର ବିକଳ୍ପ ନୁହେଁ।',
        sources: 'WHO, CDC, ଏବଂ ଭାରତ ସ୍ୱାସ୍ଥ୍ୟ ମନ୍ତ୍ରଣାଳୟରୁ ସୂଚନା ପ୍ରାପ୍ତ',
        rights: 'ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ',
        accessibility: 'ପ୍ରବେଶଯୋଗ୍ୟତା ବିବରଣୀ',
    },
};

// --- Hindi translations ---
const hiTranslations = {
    header: {
        title: 'स्वास्थ्य साथी',
        home: 'होम',
        tools: 'स्वास्थ्य उपकरण',
        resources: 'संसाधन',
        support: 'स्थानीय सहायता',
    },
    home: {
        welcome: 'आपका स्वास्थ्य साथी',
        subtitle: 'AI-संचालित स्वास्थ्य जानकारी और संसाधन',
        chatbotPrompt: 'अपनी स्वास्थ्य चिंताओं के बारे में मुझसे पूछें',
        featuredTools: 'विशेष उपकरण',
        emergencyTitle: 'आपातकालीन?',
        emergencyText: 'तत्काल सहायता के लिए इन नंबरों पर कॉल करें',
    },
    chatbot: {
        placeholder: 'अपना स्वास्थ्य प्रश्न यहां टाइप करें...',
        greeting: 'नमस्ते! मैं आज आपकी स्वास्थ्य चिंताओं में कैसे मदद कर सकता हूं?',
        speak: 'बोलें',
        send: 'भेजें',
        loading: 'सोच रहा हूं...',
    },
    tools: {
        symptomChecker: 'लक्षण जांचकर्ता',
        firstAid: 'प्राथमिक उपचार टिप्स',
        medicationReminder: 'दवा रिमाइंडर',
        healthCalculators: 'स्वास्थ्य कैलकुलेटर',
        dailyTips: 'दैनिक स्वास्थ्य टिप्स',
    },
    symptomChecker: {
        title: 'लक्षण जांचकर्ता',
        disclaimer:
            'यह चिकित्सीय निदान नहीं है। कृपया स्वास्थ्य देखभाल पेशेवर से परामर्श करें।',
        enterSymptoms: 'अपने लक्षण दर्ज करें',
        checkButton: 'लक्षण जांचें',
        results: 'संभावित स्थितियां',
        severity: 'गंभीरता',
    },
    firstAid: {
        title: 'प्राथमिक उपचार टिप्स',
        burns: 'जलन',
        cuts: 'कट और घाव',
        fractures: 'फ्रैक्चर',
        choking: 'दम घुटना',
        snakeBite: 'सांप का काटना',
        heatStroke: 'हीट स्ट्रोक',
    },
    localSupport: {
        findHospitals: 'नजदीकी अस्पताल खोजें',
        emergencyContacts: 'आपातकालीन संपर्क',
        ambulance: 'एम्बुलेंस',
        mentalHealth: 'मानसिक स्वास्थ्य हेल्पलाइन',
        womenSafety: 'महिला सुरक्षा हेल्पलाइन',
        childHelpline: 'चाइल्ड हेल्पलाइन',
    },
    footer: {
        disclaimer:
            'प्रदान की गई स्वास्थ्य जानकारी केवल शैक्षिक उद्देश्यों के लिए है और पेशेवर चिकित्सा सलाह का विकल्प नहीं है।',
        sources: 'WHO, CDC, और भारत स्वास्थ्य मंत्रालय से प्राप्त जानकारी',
        rights: 'सर्वाधिकार सुरक्षित',
        accessibility: 'पहुंच विवरण',
    },
};
// --- Telugu translations ---
const teTranslations = {
    header: {
        title: 'హెల్త్ కంపానియన్',
        home: 'హోమ్',
        tools: 'ఆరోగ్య టూల్స్',
        resources: 'వనరులు',
        support: 'స్థానిక సహాయం',
    },
    home: {
        welcome: 'మీ ఆరోగ్య సహచరుడు',
        subtitle: 'AI ఆధారిత ఆరోగ్య సమాచారం మరియు వనరులు',
        chatbotPrompt: 'మీ ఆరోగ్య సమస్యలను అడగండి',
        featuredTools: 'ప్రత్యేక టూల్స్',
        emergencyTitle: 'తత్కాలమే అవసరం?',
        emergencyText: 'తక్షణ సహాయానికి ఈ నంబర్లకు కాల్ చేయండి',
    },
    chatbot: {
        placeholder: 'మీ ఆరోగ్య ప్రశ్నను ఇక్కడ టైప్ చేయండి...',
        greeting: 'హలో! మీ ఆరోగ్య సమస్యలలో నేను ఎలా సహాయపడగలను?',
        speak: 'మాట్లాడండి',
        send: 'పంపండి',
        loading: 'ఆలోచిస్తున్నాం...',
    },
    tools: {
        symptomChecker: 'లక్షణాలను తనిఖీ చేయు సాధనం',
        firstAid: 'మొదటి సహాయం సూచనలు',
        medicationReminder: 'మందుల గుర్తు',
        healthCalculators: 'ఆరోగ్య గణకాలు',
        dailyTips: 'రోజువారీ ఆరోగ్య సూచనలు',
    },
    symptomChecker: {
        title: 'లక్షణాలను తనిఖీ చేయు సాధనం',
        disclaimer: 'ఇది వైద్య నిర్ధారణ కాదు. దయచేసి వైద్య నిపుణులను సంప్రదించండి.',
        enterSymptoms: 'మీ లక్షణాలను నమోదు చేయండి',
        checkButton: 'లక్షణాలు తనిఖీ చేయండి',
        results: 'సాధ్యమైన పరిస్థితులు',
        severity: 'తీవ్రత',
    },
    firstAid: {
        title: 'మొదటి సహాయం సూచనలు',
        burns: 'జ్వాలలు',
        cuts: 'కత్తిరింపులు మరియు గాయాలు',
        fractures: 'ఎముకల విరగడం',
        choking: 'గుండెనొప్పి',
        snakeBite: 'పాము కొట్టు',
        heatStroke: 'వేయిలు దద్దు',
    },
    localSupport: {
        findHospitals: 'దగ్గరలో ఆసుపత్రులను కనుగొనండి',
        emergencyContacts: 'అత్యవసర సంప్రదింపులు',
        ambulance: 'ఆంబులెన్స్',
        mentalHealth: 'మానసిక ఆరోగ్య హెల్ప్‌లైన్',
        womenSafety: 'స్త్రీల భద్రత హెల్ప్‌లైన్',
        childHelpline: 'శిశు హెల్ప్‌లైన్',
    },
    footer: {
        disclaimer: 'ప్రదత్త ఆరోగ్య సమాచారం కేవలం విద్యాసంబంధిత ఉద్దేశ్యాలకే. ఇది వైద్య సలహాకు ప్రత్యామ్నాయం కాదు.',
        sources: 'సమాచారం మూలాలు: WHO, CDC, మరియు భారత ప్రభుత్వ ఆరోగ్య శాఖ',
        rights: 'అన్ని హక్కులు सुरक्षितంగా ఉన్నాయి',
        accessibility: 'ప్రవేశయోగ్యత ప్రకటన',
    },
};
// --- Tamil translations ---
const taTranslations = {
    header: {
        title: 'ஆரோக்கிய துணை',
        home: 'முகப்பு',
        tools: 'ஆரோக்கிய கருவிகள்',
        resources: 'வளங்கள்',
        support: 'உள்ளூர் உதவி',
    },
    home: {
        welcome: 'உங்கள் ஆரோக்கிய துணை',
        subtitle: 'AI ஆல் இயக்கப்படும் ஆரோக்கிய தகவல்கள் மற்றும் வளங்கள்',
        chatbotPrompt: 'உங்கள் ஆரோக்கியக் கேள்விகளை கேளுங்கள்',
        featuredTools: 'சிறப்பான கருவிகள்',
        emergencyTitle: 'அவசரம்?',
        emergencyText: 'உடனடி உதவிக்கு இந்த எண்களை அழைக்கவும்',
    },
    chatbot: {
        placeholder: 'உங்கள் ஆரோக்கியக் கேள்வியை இங்கே টাইப் செய்யவும்...',
        greeting: 'வணக்கம்! இன்று உங்கள் ஆரோக்கியக் கவலைகளில் நான் எப்படி உதவலாம்?',
        speak: 'பேசவும்',
        send: 'அனுப்பவும்',
        loading: 'கூறிவிட்டேன்...',
    },
    tools: {
        symptomChecker: 'அலட்சிய சோதனை',
        firstAid: 'முதலுதவி குறிப்புகள்',
        medicationReminder: 'மருந்து நினைவூட்டல்',
        healthCalculators: 'ஆரோக்கியக் கணிப்பிகள்',
        dailyTips: 'தினசரி ஆரோக்கியக் குறிப்புகள்',
    },
    symptomChecker: {
        title: 'அலட்சிய சோதனை',
        disclaimer: 'இது மருத்துவ நிபுணத்துவம் அல்ல. தயவுசெய்து ஒரு மருத்துவரை அணுகவும்.',
        enterSymptoms: 'உங்கள் அறிகுறிகளை உள்ளிடவும்',
        checkButton: 'அறிகுறிகளைச் சரிபார்க்கவும்',
        results: 'சாத்தியமான நிலைகள்',
        severity: 'தீவிரம்',
    },
    firstAid: {
        title: 'முதலுதவி குறிப்புகள்',
        burns: 'எரிச்சல்கள்',
        cuts: 'கத்திகள் மற்றும் காயங்கள்',
        fractures: 'எலும்பு முறிவு',
        choking: 'உள்ளிழைவு',
        snakeBite: 'பாம்பு கடித்தல்',
        heatStroke: 'சூடான அசல்',
    },
    localSupport: {
        findHospitals: 'சூழலிலுள்ள மருத்துவமனைகளை கண்டுபிடிக்கவும்',
        emergencyContacts: 'அவசர தொடர்புகள்',
        ambulance: 'ஆம்புலன்ஸ்',
        mentalHealth: 'மனநல ஹெல்ப்லைன்',
        womenSafety: 'பெண்கள் பாதுகாப்பு ஹெல்ப்லைன்',
        childHelpline: 'குழந்தைகள் ஹெல்ப்லைன்',
    },
    footer: {
        disclaimer: 'கொடுக்கப்பட்ட ஆரோக்கிய தகவல்கள் கல்விச் சுட்டிகளுக்கே; இது மருத்துவ ஆலோசனையின் மாற்றமல்ல.',
        sources: 'தகவல் மூலங்கள்: WHO, CDC, மற்றும் இந்திய சுகாதார அமைச்சு',
        rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை',
        accessibility: 'அணுகல் அறிக்கை',
    },
};
// --- Kannada translations ---
const knTranslations = {
    header: {
        title: 'ಹೆಲ್ತ್ ಕಂಪಾನಿಯನ್',
        home: 'ಮುಖಪುಟ',
        tools: 'ಆರೋಗ್ಯ ಸಾಧನಗಳು',
        resources: 'ಸಂಪನ್ಮೂಲಗಳು',
        support: 'ಸ್ಥಳೀಯ ಸಹಾಯ',
    },
    home: {
        welcome: 'ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಹಚರ',
        subtitle: 'AI ಮೂಲಕ ಆರೋಗ್ಯ ಮಾಹಿತಿ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳು',
        chatbotPrompt: 'ನಿಮ್ಮ ಆರೋಗ್ಯದ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ',
        featuredTools: 'ಪ್ರಮುಖ ಸಾಧನಗಳು',
        emergencyTitle: 'ತುರ್ತು ಪರಿಸ್ಥಿತಿ?',
        emergencyText: 'ತಕ್ಷಣ ಸಹಾಯಕ್ಕಾಗಿ ಈ ಸಂಖ್ಯೆಗಳಿಗೆ ಕರೆ ಮಾಡಿ',
    },
    chatbot: {
        placeholder: 'ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...',
        greeting: 'ನಮಸ್ಕಾರ! ಇಂದು ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳಲ್ಲಿ ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
        speak: 'ಮಾತನಾಡಿ',
        send: 'ಕಳುಹಿಸಿ',
        loading: 'ಚಿಂತಿಸುತ್ತಿದೆ...',
    },
    tools: {
        symptomChecker: 'ಲಕ್ಷಣ ಪರಿಶೀಲಕ',
        firstAid: 'ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಸೂಚನೆಗಳು',
        medicationReminder: 'ಮೆಡಿಕೇಶನ್ ರಿಮೈಂಡರ್',
        healthCalculators: 'ಆರೋಗ್ಯ ಕ್ಯಾಲ್ಕ್ಯುಲೇಟರ್‌ಗಳು',
        dailyTips: 'ದೈನಂದಿನ ಆರೋಗ್ಯ ಸಲಹೆಗಳು',
    },
    symptomChecker: {
        title: 'ಲಕ್ಷಣ ಪರಿಶೀಲಕ',
        disclaimer: 'ಇದು ವೈದ್ಯಕೀಯ ನಿರ್ಣಯವಲ್ಲ. ದಯವಿಟ್ಟು ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
        enterSymptoms: 'ನಿಮ್ಮ ಲಕ್ಷಣಗಳನ್ನು ನಮೂದಿಸಿ',
        checkButton: 'ಲಕ್ಷಣಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
        results: 'ಸಾಧ್ಯವಿರುವ ಪರಿಸ್ಥಿತಿಗಳು',
        severity: 'ಗಂಭೀರತೆ',
    },
    firstAid: {
        title: 'ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಸೂಚನೆಗಳು',
        burns: 'ಬರ್ನ್',
        cuts: 'ಕತ್ತರಿಸು ಮತ್ತು ಗಾಯಗಳು',
        fractures: 'ಎಲುಬಿನ ಮುರಿದಿಕೆ',
        choking: 'ಹಿಂಜರಿಕೆ',
        snakeBite: 'ಹಾವು ಕಟು',
        heatStroke: 'ಬಿಸಿ ಅಘಾತ',
    },
    localSupport: {
        findHospitals: 'ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕಿ',
        emergencyContacts: 'ತುರ್ತು ಸಂಪರ್ಕಗಳು',
        ambulance: 'ಆಂಬುಲೆನ್ಸ್',
        mentalHealth: 'ಮಾನಸಿಕ ಆರೋಗ್ಯ ಹಾಟ್‌ಲೈನ್',
        womenSafety: 'ಹೆಣ್ಣು ಸುರಕ್ಷತೆ ಹಾಟ್‌ಲೈನ್',
        childHelpline: 'ಮಕ್ಕಳ ಸಹಾಯ ದೂತಿ',
    },
    footer: {
        disclaimer: 'ಕೊಡಲಾದ ಆರೋಗ್ಯ ಮಾಹಿತಿ ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಗಳಿಗೆ ಮಾತ್ರವಾಗಿದೆ; ವೈದ್ಯಕೀಯ ಸಲಹೆಗೆ ಪರ್ಯಾಯವಲ್ಲ.',
        sources: 'ಮೂಲಗಳು: WHO, CDC, ಮತ್ತು ಭಾರತದ ಆರೋಗ್ಯ ಇಲಾಖೆ',
        rights: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಸಂರಕ್ಷಿಸಲಾಗಿದೆ',
        accessibility: 'ಸೌಲಭ್ಯ ಪ್ರಕಟಣೆ',
    },
};
// --- Bengali translations ---
const bnTranslations = {
    header: {
        title: 'হেলথ কম্প্যানিয়ন',
        home: 'হোম',
        tools: 'স্বাস্থ্য সরঞ্জাম',
        resources: 'সম্পদ',
        support: 'স্থানীয় সহায়তা',
    },
    home: {
        welcome: 'আপনার স্বাস্থ্য সহচর',
        subtitle: 'AI দ্বারা পরিচালিত স্বাস্থ্য তথ্য ও সম্পদ',
        chatbotPrompt: 'আপনার স্বাস্থ্য সম্পর্কিত প্রশ্ন করুন',
        featuredTools: 'বৈশিষ্ট্যযুক্ত সরঞ্জাম',
        emergencyTitle: 'জরুরি অবস্থা?',
        emergencyText: 'সরাসরি সহায়তার জন্য এই নম্বরে কল করুন',
    },
    chatbot: {
        placeholder: 'এখানে আপনার স্বাস্থ্য প্রশ্ন টাইপ করুন...',
        greeting: 'হ্যালো! আমি আজ আপনার স্বাস্থ্য সমস্যায় কিভাবে সাহায্য করতে পারি?',
        speak: 'কথা বলুন',
        send: 'প্রেরণ করুন',
        loading: 'চিন্তা করা হচ্ছে...',
    },
    tools: {
        symptomChecker: 'লক্ষণ পরীক্ষা',
        firstAid: 'প্রথম চিকিৎসা টিপস',
        medicationReminder: 'ওষুধ স্মরণকারী',
        healthCalculators: 'স্বাস্থ্য ক্যালকুলেটর',
        dailyTips: 'দৈনন্দিন স্বাস্থ্য টিপস',
    },
    symptomChecker: {
        title: 'লক্ষণ পরীক্ষা',
        disclaimer: 'এটি কোনো চিকিৎসা নির্ণয় নয়। দয়া করে চিকিৎসকের পরামর্শ নিন।',
        enterSymptoms: 'আপনার লক্ষণ লিখুন',
        checkButton: 'লক্ষণ পরীক্ষা করুন',
        results: 'সম্ভাব্য অবস্থা',
        severity: 'তীব্রতা',
    },
    firstAid: {
        title: 'প্রথম চিকিৎসা টিপস',
        burns: 'দগ্ধ',
        cuts: 'কাটছাঁট এবং ক্ষত',
        fractures: 'হাড় ভাঙা',
        choking: 'ঘনিষ্ঠতা',
        snakeBite: 'সাপের কামড়',
        heatStroke: 'উচ্চ তাপমাত্রা',
    },
    localSupport: {
        findHospitals: 'নিকটস্থ হাসপাতাল খুঁজুন',
        emergencyContacts: 'জরুরি যোগাযোগ',
        ambulance: 'অ্যাম্বুলেন্স',
        mentalHealth: 'মানসিক স্বাস্থ্য হেল্পলাইন',
        womenSafety: 'মহিলা নিরাপত্তা হেল্পলাইন',
        childHelpline: 'শিশু হেল্পলাইন',
    },
    footer: {
        disclaimer: 'প্রদত্ত স্বাস্থ্য তথ্য শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে; এটি পেশাদার চিকিৎসার বিকল্প নয়।',
        sources: 'তথ্যের উৎস: WHO, CDC, এবং ভারত সরকার স্বাস্থ্য মন্ত্রণালয়',
        rights: 'সমস্ত অধিকার সংরক্ষিত',
        accessibility: 'অ্যাক্সেসিবিলিটি বিবৃতি',
    },
};
// --- Marathi translations ---
const mrTranslations = {
    header: {
        title: 'हेल्थ कॉम्पॅनियन',
        home: 'मुख्यपृष्ठ',
        tools: 'आरोग्य साधने',
        resources: 'संसाधने',
        support: 'स्थानिक मदत',
    },
    home: {
        welcome: 'आपला आरोग्य साथी',
        subtitle: 'AI-चालित आरोग्य माहिती आणि संसाधने',
        chatbotPrompt: 'आपल्या आरोग्याबाबत विचार करा',
        featuredTools: 'वैशिष्ट्यपूर्ण साधने',
        emergencyTitle: 'तत्काल मदत हवी?',
        emergencyText: 'तत्काळ मदतीसाठी या नंबरवर कॉल करा',
    },
    chatbot: {
        placeholder: 'आपला आरोग्य प्रश्न येथे टाईप करा...',
        greeting: 'नमस्कार! आज मी आपल्या आरोग्य समस्यांमध्ये कशी मदत करू शकतो?',
        speak: 'बोल',
        send: 'पाठवा',
        loading: 'विचार करत आहे...',
    },
    tools: {
        symptomChecker: 'लक्षण तपासक',
        firstAid: 'प्राथमिक उपचार टिप्स',
        medicationReminder: 'औषध स्मरण',
        healthCalculators: 'आरोग्य गणक',
        dailyTips: 'दैनंदिन आरोग्य टिप्स',
    },
    symptomChecker: {
        title: 'लक्षण तपासक',
        disclaimer: 'हे वैद्यकीय निदान नाही. कृपया वैद्यकीय तज्ज्ञांचा सल्ला घ्या.',
        enterSymptoms: 'आपली लक्षणे लिहा',
        checkButton: 'लक्षण तपासा',
        results: 'संभाव्य स्थिती',
        severity: 'गंभीरता',
    },
    firstAid: {
        title: 'प्राथमिक उपचार टिप्स',
        burns: 'सोडणे',
        cuts: 'काप आणि जखम',
        fractures: 'हाड तुटणे',
        choking: 'घुटणे',
        snakeBite: 'सापाचा विषारी चावा',
        heatStroke: 'उष्णता झटका',
    },
    localSupport: {
        findHospitals: 'जवळच्या रुग्णालय शोधा',
        emergencyContacts: 'आपत्कालीन संपर्क',
        ambulance: 'अँम्बुलन्स',
        mentalHealth: 'मानसिक आरोग्य हेल्पलाइन',
        womenSafety: 'महिला सुरक्षितता हेल्पलाइन',
        childHelpline: 'बाल हेल्पलाइन',
    },
    footer: {
        disclaimer: 'पुरवलेली आरोग्य माहिती केवळ शैक्षणिक उद्देशासाठी आहे आणि व्यावसायिक वैद्यकीय सल्ल्याचा पर्याय नाही.',
        sources: 'माहिती स्त्रोत: WHO, CDC, आणि भारत सरकार आरोग्य मंत्रालय',
        rights: 'सर्व हक्क राखीव आहेत',
        accessibility: 'अॅक्सेसिबिलिटी स्टेटमेंट',
    },
};

// --- Gujarati translations ---
const guTranslations = {
    header: {
        title: 'હેલ્થ કોમ્પેનિયન',
        home: 'હોમ',
        tools: 'આરોગ્ય સાધનો',
        resources: 'સંપત્તિઓ',
        support: 'સ્થાનિક સપોર્ટ',
    },
    home: {
        welcome: 'તમારો આરોગ્ય સહયોગી',
        subtitle: 'AI-ચલિત આરોગ્ય માહિતી અને સાધનો',
        chatbotPrompt: 'તમારા આરોગ્ય સંબંધિત પ્રશ્નો પૂછો',
        featuredTools: 'વિશેષ સાધનો',
        emergencyTitle: 'આપાતકાલીન?',
        emergencyText: 'તત્કાળ સહાય માટે આ નંબર પર કૉલ કરો',
    },
    chatbot: {
        placeholder: 'અહીં તમારો આરોગ્ય પ્રશ્ન ટાઈપ કરો...',
        greeting: 'હેલો! આજે હું તમારી આરોગ્ય સમસ્યાઓમાં કેવી રીતે મદદ કરી શકું?',
        speak: 'બોલો',
        send: 'મોકલો',
        loading: 'વિચારી રહ્યું છે...',
    },
    tools: {
        symptomChecker: 'લક્ષણ ચેકર',
        firstAid: 'પ્રાથમિક સારવાર ટીપ્સ',
        medicationReminder: 'દવા યાદ અપાવનાર',
        healthCalculators: 'આરોગ્ય ગણક',
        dailyTips: 'દૈનિક આરોગ્ય ટીપ્સ',
    },
    symptomChecker: {
        title: 'લક્ષણ ચેકર',
        disclaimer: 'આ કોઈ ચિકિત્સા નિદાન નથી. કૃપા કરીને આરોગ્ય વ્યાવસાયિકની સલાહ લો.',
        enterSymptoms: 'તમારા લક્ષણો દાખલ કરો',
        checkButton: 'લક્ષણો ચકાસો',
        results: 'સંભવિત પરિસ્થિતિઓ',
        severity: 'ગંભીરતા',
    },
    firstAid: {
        title: 'પ્રાથમિક સારવાર ટીપ્સ',
        burns: 'બર્ન',
        cuts: 'કાપ અને ઘાવો',
        fractures: 'હાડકાં તૂટી જવું',
        choking: 'ઘૂંટણું',
        snakeBite: 'સાંપનો ડંસ',
        heatStroke: 'ગરમીથી થતું ઝટકો',
    },
    localSupport: {
        findHospitals: 'નજીકના હોસ્પિટલ શોધો',
        emergencyContacts: 'આપાતકાલીન સંપર્કો',
        ambulance: 'એંબ્યુલન્સ',
        mentalHealth: 'માનસિક આરોગ્ય હેલ્પલાઇન',
        womenSafety: 'સ્ત્રી સુરક્ષા હેલ્પલાઇન',
        childHelpline: 'બાળક હેલ્પલાઇન',
    },
    footer: {
        disclaimer: 'પ્રદત્ત આરોગ્ય માહિતી માત્ર શૈક્ષણિક ઉદ્દેશ માટે છે; વ્યાવસાયિક ચિકિત્સા સલાહનો વિકલ્પ નથી.',
        sources: 'માહિતી સ્ત્રોત: WHO, CDC, અને ભારત સરકાર આરોગ્ય મંત્રાલય',
        rights: 'બધા અધિકાર સુરક્ષિત',
        accessibility: 'પ્રવેશક્ષમતા નિવેદન',
    },
};
// --- Malayalam translations ---
const mlTranslations = {
    header: {
        title: 'ഹെൽത്ത് കമ്പാനിയൻ',
        home: 'ഹോം',
        tools: 'ആരോഗ്യ ഉപകരണങ്ങൾ',
        resources: 'സ്രോതസ്സുകൾ',
        support: 'പ്രാദേശിക പിന്തുണ',
    },
    home: {
        welcome: 'നിങ്ങളുടെ ആരോഗ്യ സഹായി',
        subtitle: 'AI-പ്രചോദിത ആരോഗ്യ വിവരങ്ങളും സ്രോതസ്സുകളും',
        chatbotPrompt: 'നിങ്ങളുടെ ആരോഗ്യ ചോദ്യങ്ങൾ ചോദിക്കുക',
        featuredTools: 'പ്രധാന ഉപകരണങ്ങൾ',
        emergencyTitle: 'അത്യാവശ്യത്തിനായി?',
        emergencyText: 'തത്സമയ സഹായത്തിനായി ഈ നമ്പറുകളിലേക്ക് വിളിക്കൂ',
    },
    chatbot: {
        placeholder: 'നിങ്ങളുടെ ആരോഗ്യ ചോദ്യങ്ങൾ ഇവിടെ ടൈപ്പ് ചെയ്യുക...',
        greeting: 'ഹലോ! ഇന്ന് നിങ്ങളുടെ ആരോഗ്യ പ്രശ്നങ്ങളിൽ എനിക്ക് എങ്ങനെ സഹായിക്കാം?',
        speak: 'പറയുക',
        send: 'അയയ്‌ക്കുക',
        loading: 'ചിന്തിക്കുന്നു...',
    },
    tools: {
        symptomChecker: 'രോഗലക്ഷണ പരിശോധിക്കുക',
        firstAid: 'ആദ്യസഹായ ടിപ്സ്',
        medicationReminder: 'മരുന്ന് ഓർമപ്പെടുത്തൽ',
        healthCalculators: 'ആരോഗ്യ കാൽക്കുലേറ്ററുകൾ',
        dailyTips: 'ദൈനംദിന ആരോഗ്യ ടിപ്സ്',
    },
    symptomChecker: {
        title: 'രോഗലക്ഷണ പരിശോധിക്കുക',
        disclaimer: 'ഇത് ഒരു വൈദ്യ പരിശോധന അല്ല. ദയവായി ആരോഗ്യ വിദഗ്ധനെ സമീപിക്കുക.',
        enterSymptoms: 'നിങ്ങളുടെ ലക്ഷണങ്ങൾ നൽകുക',
        checkButton: 'ലക്ഷണങ്ങൾ പരിശോധിക്കുക',
        results: 'സാധ്യമായ അവസ്ഥകൾ',
        severity: 'ഗൗരവം',
    },
    firstAid: {
        title: 'ആദ്യസഹായ ടിപ്സ്',
        burns: 'കത്തൽ',
        cuts: 'ചതിയലുകൾ / മുറിവുകൾ',
        fractures: 'എല്ലുകൾ പൊട്ടൽ',
        choking: 'വാതിൽ തടസം',
        snakeBite: 'പാമ്പ് കടിയേറ്റ്',
        heatStroke: 'ചൂട് ബാധ',
    },
    localSupport: {
        findHospitals: 'സമീപത്തെ ആശുപത്രികൾ കണ്ടെത്തുക',
        emergencyContacts: 'അത്യാവശ്യ കോൺടാക്ടുകൾ',
        ambulance: 'ആംബുലൻസ്',
        mentalHealth: 'മാനസികാരോഗ്യ ഹെൽപ്പ്‌ലൈൻ',
        womenSafety: 'സ്ത്രീ സുരക്ഷ ഹെൽപ്പ്‌ലൈൻ',
        childHelpline: 'കുട്ടികൾക്ക് ഹെൽപ്പ്‌ലൈൻ',
    },
    footer: {
        disclaimer: 'നൽകിയ ആരോഗ്യ വിവരം വിദ്യാഭ്യാസപരമായ ഉദ്ദേശ്യത്തിനാണ്, പ്രൊഫഷണൽ മെഡിക്കൽ ഉപദേശം അല്ല.',
        sources: 'വിവര ഉറവുകൾ: WHO, CDC, ഇന്ത്യൻ ആരോഗ്യ മന്ത്രാലയം',
        rights: 'എല്ലാ അവകാശങ്ങളും സംരക്ഷിതമാണ്',
        accessibility: 'പ്രവേശ്യത പ്രസ്താവന',
    },
};

// --- Punjabi translations ---
const paTranslations = {
    header: {
        title: 'ਹੈਲਥ ਕੰਪੈਨਿਅਨ',
        home: 'ਹੋਮ',
        tools: 'ਸਿਹਤ ਸਾਧਨ',
        resources: 'ਸੰਸਾਧਨ',
        support: 'ਸਥਾਨਕ ਸਹਾਇਤਾ',
    },
    home: {
        welcome: 'ਤੁਹਾਡਾ ਸਿਹਤ ਸਾਥੀ',
        subtitle: 'AI-ਸਮਰਥਿਤ ਸਿਹਤ ਜਾਣਕਾਰੀ ਅਤੇ ਸੰਸਾਧਨ',
        chatbotPrompt: 'ਆਪਣੀਆਂ ਸਿਹਤ ਸੰਬੰਧੀ ਚਿੰਤਾਵਾਂ ਪੁੱਛੋ',
        featuredTools: 'ਵਿਸ਼ੇਸ਼ ਸਾਧਨ',
        emergencyTitle: 'ਐਮਰਜੈਂਸੀ?',
        emergencyText: 'ਤੁਰੰਤ ਮਦਦ ਲਈ ਇਹ ਨੰਬਰ ਕਾਲ ਕਰੋ',
    },
    chatbot: {
        placeholder: 'ਇੱਥੇ ਆਪਣਾ ਸਿਹਤ ਪ੍ਰਸ਼ਨ ਲਿਖੋ...',
        greeting: 'ਹੈਲੋ! ਅੱਜ ਮੈਂ ਤੁਹਾਡੇ ਸਿਹਤ ਸੰਬੰਧੀ ਮੁੱਦਿਆਂ ਵਿੱਚ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
        speak: 'ਬੋਲੋ',
        send: 'ਭੇਜੋ',
        loading: 'ਸੋਚ ਰਿਹਾ ਹਾਂ...',
    },
    tools: {
        symptomChecker: 'ਲੱਛਣ ਚੈੱਕਰ',
        firstAid: 'ਪਹਿਲੀ ਸਹਾਇਤਾ ਟਿੱਪਸ',
        medicationReminder: 'ਦਵਾਈ ਯਾਦ ਦਿਵਾਉਣ ਵਾਲਾ',
        healthCalculators: 'ਸਿਹਤ ਕੈਲਕੂਲੇਟਰ',
        dailyTips: 'ਰੋਜ਼ਾਨਾ ਸਿਹਤ ਟਿੱਪਸ',
    },
    symptomChecker: {
        title: 'ਲੱਛਣ ਚੈੱਕਰ',
        disclaimer: 'ਇਹ ਕੋਈ ਮੈਡੀਕਲ ਨਿਧਾਰਨ ਨਹੀਂ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਹੈਲਥ ਪ੍ਰੋਫੈਸ਼ਨਲ ਨਾਲ ਸਲਾਹ ਕਰੋ।',
        enterSymptoms: 'ਆਪਣੇ ਲੱਛਣ ਦਰਜ ਕਰੋ',
        checkButton: 'ਲੱਛਣ ਚੈੱਕ ਕਰੋ',
        results: 'ਸੰਭਾਵਿਤ ਹਾਲਤਾਂ',
        severity: 'ਗੰਭੀਰਤਾ',
    },
    firstAid: {
        title: 'ਪਹਿਲੀ ਸਹਾਇਤਾ ਟਿੱਪਸ',
        burns: 'ਜਲਨਾ',
        cuts: 'ਕਟ ਅਤੇ ਜ਼ਖਮ',
        fractures: 'ਹੱਡੀਆਂ ਟੁੱਟਣਾ',
        choking: 'ਘੁੱਟਣਾ',
        snakeBite: 'ਸੱਪ ਦਾ ਕੰਟਾ',
        heatStroke: 'ਤਾਪ ਸਟ੍ਰੋਕ',
    },
    localSupport: {
        findHospitals: 'ਨੇੜੇ ਹਸਪਤਾਲ ਲੱਭੋ',
        emergencyContacts: 'ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ',
        ambulance: 'ਐਂਬੂਲੈਂਸ',
        mentalHealth: 'ਮਨੋਰੋਗ ਸਹਾਇਤਾ ਲਾਈਨ',
        womenSafety: 'ਮਹਿਲਾ ਸੁਰੱਖਿਆ ਸਹਾਇਤਾ ਲਾਈਨ',
        childHelpline: 'ਬੱਚਿਆਂ ਲਈ ਸਹਾਇਤਾ ਲਾਈਨ',
    },
    footer: {
        disclaimer: 'ਦਿੱਤੀ ਸਿਹਤ ਜਾਣਕਾਰੀ ਸਿੱਖਿਆ ਦੇ ਉਦੇਸ਼ ਲਈ ਹੈ ਅਤੇ ਪੇਸ਼ੇਵਰ ਮੈਡੀਕਲ ਸਲਾਹ ਦਾ ਵਿਕਲਪ ਨਹੀਂ ਹੈ।',
        sources: 'ਜਾਣਕਾਰੀ ਸਰੋਤ: WHO, CDC, ਅਤੇ ਭਾਰਤ ਸਰਕਾਰ ਸਿਹਤ ਮੰਤ੍ਰਾਲਾ',
        rights: 'ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ',
        accessibility: 'ਪਹੁੰਚ ਸਕੇਤੀ ਬਿਆਨ',
    },
};
// --- Placeholders for other Indian languages ---

// Use saved language if available
const savedLang =
    (typeof window !== 'undefined' && localStorage.getItem('hc_lang')) || 'en';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslations },
        od: { translation: odTranslations },
        hi: { translation: hiTranslations },
        te: { translation: teTranslations },
        ta: { translation: taTranslations },
        kn: { translation: knTranslations },
        bn: { translation: bnTranslations },
        mr: { translation: mrTranslations },
        gu: { translation: guTranslations },
        ml: { translation: mlTranslations },
        pa: { translation: paTranslations },
    },
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    react: { useSuspense: true },
    // Add custom function for missing keys
    saveMissing: true,
    missingKeyHandler: async (lng, ns, key, fallbackValue) => {
        try {
            // Call your /api/translate endpoint
            const response = await axios.post('/api/translate', {
                text: fallbackValue || key,
                targetLang: lng,
            });
            const translatedText = response.data.translatedText;

            // Optionally, you could dynamically add this translation to i18n
            i18n.addResource(lng, ns, key, translatedText);

            return translatedText;
        } catch (err) {
            console.error('Translation API error:', err);
            return fallbackValue || key;
        }
    },
});

export default i18n;
