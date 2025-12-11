import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Search, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Grid, 
  Cloud, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Smartphone,
  Send,
  Plus,
  MoreVertical,
  Image as ImageIcon,
  Menu,
  X,
  Languages,
  CheckCircle2,
  Play
} from 'lucide-react';

// --- DATA STRUCTURE & CONTENT ---

const COURSE_DATA = [
  {
    id: 'gemini',
    icon: 'sparkles',
    // Updated Gradient: Vibrant Indigo/Purple/Pink
    color: 'from-indigo-500 via-purple-500 to-pink-500',
    shadow: 'shadow-purple-500/30',
    title: {
      en: "Voice & Search with Gemini",
      hi: "जेमिनी AI से वॉयस और सर्च"
    },
    desc: {
      en: "Learn to talk to AI and get answers instantly.",
      hi: "AI से बात करना और तुरंत जवाब पाना सीखें।"
    },
    steps: [
      {
        title: { en: "Open Gemini App", hi: "जेमिनी ऐप खोलें" },
        text: { 
          en: "Tap the Gemini icon on your phone. It looks like a star.", 
          hi: "अपने फोन पर जेमिनी आइकन दबाएं। यह एक तारे जैसा दिखता है।" 
        },
        action: "tap_icon"
      },
      {
        title: { en: "Use the Mic", hi: "माइक का उपयोग करें" },
        text: { 
          en: "Tap the Microphone icon to speak instead of typing. It's faster!", 
          hi: "टाइप करने के बजाय बोलने के लिए माइक्रोफोन आइकन दबाएं। यह तेज़ है!" 
        },
        action: "tap_mic"
      },
      {
        title: { en: "Ask a Question", hi: "सवाल पूछें" },
        text: { 
          en: "Try asking: 'Give me a recipe for paneer'.", 
          hi: "पूछकर देखें: 'पनीर की सब्जी की रेसिपी बताओ'।" 
        },
        action: "view_result"
      }
    ]
  },
  {
    id: 'tasks',
    icon: 'check',
    // Updated Gradient: Sky/Blue/Indigo
    color: 'from-sky-400 via-blue-500 to-indigo-600',
    shadow: 'shadow-blue-500/30',
    title: {
      en: "Google Tasks & Calendar",
      hi: "गूगल टास्क और कैलेंडर"
    },
    desc: {
      en: "Never forget a bill or meeting again.",
      hi: "अब कोई बिल या मीटिंग कभी न भूलें।"
    },
    steps: [
      {
        title: { en: "Add a New Task", hi: "नया काम जोड़ें" },
        text: { 
          en: "Tap the big + button to add something you need to do.", 
          hi: "जो काम करना है उसे जोड़ने के लिए बड़ा + बटन दबाएं।" 
        },
        action: "add_task"
      },
      {
        title: { en: "Set Date & Time", hi: "तारीख और समय चुनें" },
        text: { 
          en: "Choose when you want to be reminded so your phone alerts you.", 
          hi: "चुनें कि आपको कब याद दिलाना है ताकि आपका फोन आपको अलर्ट करे।" 
        },
        action: "set_date"
      },
      {
        title: { en: "View on Calendar", hi: "कैलेंडर पर देखें" },
        text: { 
          en: "Your tasks appear automatically on your Google Calendar.", 
          hi: "आपके कार्य आपके गूगल कैलेंडर पर अपने आप दिखाई देते हैं।" 
        },
        action: "view_calendar"
      }
    ]
  },
  {
    id: 'keep',
    icon: 'sticky-note',
    // Updated Gradient: Amber/Orange/Red
    color: 'from-amber-400 via-orange-400 to-red-400',
    shadow: 'shadow-orange-500/30',
    title: {
      en: "Google Keep Notes",
      hi: "गूगल कीप नोट्स"
    },
    desc: {
      en: "Save ideas, lists, and photos instantly.",
      hi: "विचार, लिस्ट और फोटो तुरंत सेव करें।"
    },
    steps: [
      {
        title: { en: "Create a Note", hi: "नोट बनाएं" },
        text: { 
          en: "Tap 'Take a note' to write down anything quickly.", 
          hi: "जल्दी से कुछ भी लिखने के लिए 'नोट लें' पर टैप करें।" 
        },
        action: "create_note"
      },
      {
        title: { en: "Make a Checklist", hi: "चेकलिस्ट बनाएं" },
        text: { 
          en: "Great for shopping lists! You can tick items off as you buy them.", 
          hi: "खरीदारी की लिस्ट के लिए बढ़िया! सामान खरीदने पर आप उन्हें टिक कर सकते हैं।" 
        },
        action: "checklist"
      },
      {
        title: { en: "Color Code", hi: "रंग बदलें" },
        text: { 
          en: "Change note colors to organize (e.g., Red for Urgent).", 
          hi: "व्यवस्थित करने के लिए रंग बदलें (जैसे, जरूरी काम के लिए लाल)।" 
        },
        action: "color_note"
      }
    ]
  },
  {
    id: 'drive',
    icon: 'cloud',
    // Updated Gradient: Emerald/Green/Teal
    color: 'from-emerald-400 via-green-500 to-teal-600',
    shadow: 'shadow-green-500/30',
    title: {
      en: "Google Drive & Apps",
      hi: "गूगल ड्राइव और ऐप्स"
    },
    desc: {
      en: "Store your documents safely online.",
      hi: "अपने दस्तावेज़ों को सुरक्षित रूप से ऑनलाइन स्टोर करें।"
    },
    steps: [
      {
        title: { en: "Upload a File", hi: "फाइल अपलोड करें" },
        text: { 
          en: "Save photos or IDs to the cloud so you never lose them.", 
          hi: "फोटो या आईडी को क्लाउड पर सेव करें ताकि वे कभी न खोएं।" 
        },
        action: "upload"
      },
      {
        title: { en: "Create Folder", hi: "फोल्डर बनाएं" },
        text: { 
          en: "Organize files into folders like 'Personal' or 'Work'.", 
          hi: "'व्यक्तिगत' या 'काम' जैसे फोल्डर बनाकर फाइलों को व्यवस्थित करें।" 
        },
        action: "folder"
      }
    ]
  }
];

// --- COMPONENT: GEMINI SIMULATOR ---
const GeminiSim = ({ stepIndex, lang }) => {
  const [micActive, setMicActive] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (stepIndex === 0) setMessages([]);
    if (stepIndex === 2 && messages.length === 0) {
      setMessages([{ type: 'user', text: lang === 'hi' ? 'पनीर की सब्जी की रेसिपी बताओ' : 'Give me a recipe for paneer' }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'ai', text: lang === 'hi' ? 'ज़रूर! यहाँ पनीर की आसान रेसिपी है...' : 'Sure! Here is a simple Paneer recipe...' }]);
      }, 1000);
    }
  }, [stepIndex, lang]);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-gray-800 h-80 flex flex-col relative">
      {/* Fake Status Bar */}
      <div className="bg-gray-100 h-6 flex justify-between px-4 items-center text-xs text-gray-500">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
      
      {/* App Header */}
      <div className="p-3 bg-white border-b flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
          <Play className="w-4 h-4 text-white fill-current" />
        </div>
        <span className="font-semibold text-gray-700">Gemini</span>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 bg-gray-50 flex flex-col gap-3 overflow-y-auto">
        {stepIndex === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center opacity-50">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-2 animate-bounce"></div>
            <p className="text-sm">{lang === 'hi' ? 'जेमिनी में आपका स्वागत है' : 'Welcome to Gemini'}</p>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`p-3 rounded-lg max-w-[80%] text-sm ${m.type === 'user' ? 'self-end bg-blue-100 text-blue-900' : 'self-start bg-white shadow-sm border text-gray-800'}`}>
            {m.text}
          </div>
        ))}
        
        {micActive && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-full animate-pulse shadow-lg shadow-purple-500/50">
               <div className="flex gap-1 h-8 items-end">
                 <div className="w-2 bg-blue-500 animate-[bounce_1s_infinite] h-4"></div>
                 <div className="w-2 bg-red-500 animate-[bounce_1.2s_infinite] h-8"></div>
                 <div className="w-2 bg-yellow-500 animate-[bounce_0.8s_infinite] h-6"></div>
                 <div className="w-2 bg-green-500 animate-[bounce_1.1s_infinite] h-5"></div>
               </div>
            </div>
            <p className="absolute bottom-20 text-white font-bold">{lang === 'hi' ? 'सुन रहा हूँ...' : 'Listening...'}</p>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t flex items-center gap-2">
        <div className="flex-1 bg-gray-100 h-10 rounded-full px-4 flex items-center text-gray-400 text-sm">
          {lang === 'hi' ? 'मैसेज लिखें...' : 'Type a message...'}
        </div>
        <button 
          onClick={() => {
            if (stepIndex === 1) {
              setMicActive(true);
              setTimeout(() => setMicActive(false), 2000);
            }
          }}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all ${stepIndex === 1 ? 'bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse scale-110 shadow-lg shadow-purple-400/50' : 'bg-gray-300'}`}
        >
          <Mic size={20} />
        </button>
      </div>
    </div>
  );
};

// --- COMPONENT: TASKS SIMULATOR ---
const TasksSim = ({ stepIndex, lang }) => {
  const [tasks, setTasks] = useState([]);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (stepIndex === 0) { setTasks([]); setShowInput(false); }
    if (stepIndex === 1) setShowInput(true);
    if (stepIndex === 2) {
      setTasks([{ id: 1, text: lang === 'hi' ? 'बिजली बिल भरें' : 'Pay Electricity Bill', date: 'Today, 5:00 PM' }]);
      setShowInput(false);
    }
  }, [stepIndex, lang]);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-gray-800 h-80 flex flex-col relative">
       <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 text-white flex justify-between items-center shadow-md">
         <span className="font-bold text-lg">My Tasks</span>
         <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">JP</div>
       </div>

       <div className="flex-1 bg-white p-4">
         {stepIndex === 2 && (
           <div className="mb-4">
              <h3 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">{lang === 'hi' ? 'कैलेंडर दृश्य' : 'Calendar View'}</h3>
              <div className="flex justify-between mb-2">
                {[10,11,12,13,14,15].map(d => (
                   <div key={d} className={`flex flex-col items-center p-1 rounded ${d === 12 ? 'bg-blue-100 text-blue-600 font-bold' : 'text-gray-400'}`}>
                     <span className="text-[10px]">Oct</span>
                     <span className="text-sm">{d}</span>
                   </div>
                ))}
              </div>
           </div>
         )}

         <div className="space-y-3">
           {tasks.map(t => (
             <div key={t.id} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm animate-slideIn">
               <div className="w-5 h-5 rounded-full border-2 border-blue-500"></div>
               <div>
                 <p className="text-gray-800 font-medium text-sm">{t.text}</p>
                 <p className="text-blue-500 text-xs flex items-center gap-1"><Calendar size={10}/> {t.date}</p>
               </div>
             </div>
           ))}
           {tasks.length === 0 && stepIndex !== 1 && (
             <div className="text-center text-gray-400 mt-10">
               <CheckSquare className="w-12 h-12 mx-auto mb-2 opacity-20" />
               <p className="text-sm">{lang === 'hi' ? 'कोई कार्य नहीं' : 'No tasks yet'}</p>
             </div>
           )}
         </div>
       </div>

       {showInput && (
         <div className="absolute bottom-0 w-full bg-white p-4 rounded-t-2xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] animate-slideUp">
           <input type="text" placeholder={lang === 'hi' ? 'नया कार्य...' : 'New task...'} className="w-full text-lg font-medium outline-none mb-4" autoFocus />
           <div className="flex justify-between items-center text-blue-600">
             <div className="flex gap-4">
               <Menu size={20} />
               <Calendar size={20} className={stepIndex === 1 ? 'animate-bounce' : ''} />
             </div>
             <button className="font-bold">{lang === 'hi' ? 'सेव' : 'Save'}</button>
           </div>
         </div>
       )}

       <div className="absolute bottom-6 right-6">
          <button className={`w-14 h-14 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-300 transition-transform ${stepIndex === 0 ? 'animate-bounce scale-110' : ''}`}>
            <Plus size={32} />
          </button>
       </div>
    </div>
  );
};

// --- COMPONENT: KEEP SIMULATOR ---
const KeepSim = ({ stepIndex, lang }) => {
  const [noteColor, setNoteColor] = useState('bg-white');
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (stepIndex === 0) { setNoteColor('bg-white'); setItems([]); }
    if (stepIndex === 1) setItems([{txt: 'Milk', done: false}, {txt: 'Bread', done: true}]);
    if (stepIndex === 2) setNoteColor('bg-yellow-100');
  }, [stepIndex]);

  return (
    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-800 h-80 flex flex-col">
       <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 px-4 flex items-center gap-3 shadow-sm">
         <Menu className="text-white" size={20} />
         <span className="font-bold text-white">Keep</span>
       </div>

       <div className="p-4 grid grid-cols-2 gap-3">
         {/* Main Note Interaction */}
         <div className={`col-span-2 ${noteColor} p-4 rounded-xl border border-gray-200 shadow-sm transition-colors duration-500 relative min-h-[120px]`}>
            <h4 className="font-bold text-gray-700 mb-2">{lang === 'hi' ? 'किराना लिस्ट' : 'Grocery List'}</h4>
            {stepIndex >= 1 ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded flex items-center justify-center"></div>
                  <span className="text-sm text-gray-600">{lang === 'hi' ? 'दूध' : 'Milk'}</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-4 h-4 bg-blue-500 border-2 border-blue-500 rounded flex items-center justify-center">
                     <CheckSquare size={10} className="text-white" />
                   </div>
                   <span className="text-sm text-gray-400 line-through">{lang === 'hi' ? 'ब्रेड' : 'Bread'}</span>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-sm italic">{lang === 'hi' ? 'लिखना शुरू करें...' : 'Start typing...'}</p>
            )}

            {stepIndex === 2 && (
              <div className="absolute bottom-2 right-2 flex gap-2">
                 <div className="w-6 h-6 rounded-full bg-yellow-200 border border-yellow-400 cursor-pointer animate-ping"></div>
              </div>
            )}
         </div>
         
         {/* Background Decoration Notes */}
         <div className="bg-red-100 p-3 rounded-xl opacity-50 scale-95"></div>
         <div className="bg-blue-100 p-3 rounded-xl opacity-50 scale-95"></div>
       </div>

       <div className="mt-auto bg-white p-3 border-t flex justify-between items-center text-gray-500">
         <span className="text-xs">Take a note...</span>
         <div className="flex gap-3">
           <CheckSquare size={18} className={stepIndex === 1 ? 'text-blue-500 animate-bounce' : ''} />
           <ImageIcon size={18} />
           <Mic size={18} />
         </div>
       </div>
    </div>
  );
}

// --- COMPONENT: DRIVE SIMULATOR ---
const DriveSim = ({ stepIndex, lang }) => {
  const [files, setFiles] = useState([
    { name: 'Resume.pdf', type: 'doc' },
    { name: 'Photo.jpg', type: 'img' }
  ]);

  useEffect(() => {
    if (stepIndex === 2) {
      setFiles([
        { name: 'Work', type: 'folder' }, // New folder
        { name: 'Resume.pdf', type: 'doc' },
        { name: 'Photo.jpg', type: 'img' }
      ]);
    }
  }, [stepIndex]);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-gray-800 h-80 flex flex-col relative">
      <div className="p-4 border-b flex justify-between items-center">
        <span className="font-bold text-gray-600 text-lg flex items-center gap-2">
          <Cloud className="text-emerald-500 fill-current" /> Drive
        </span>
        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">S</div>
      </div>

      <div className="flex-1 bg-gray-50 p-4">
        {stepIndex === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/5 z-10">
             <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center animate-bounce">
               <ArrowRight className="rotate-90 text-emerald-500 mb-2" />
               <span className="text-xs font-bold">{lang === 'hi' ? 'अपलोड करने के लिए यहाँ टैप करें' : 'Tap + to upload'}</span>
             </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {files.map((f, i) => (
            <div key={i} className={`bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 aspect-square animate-popIn ${f.type === 'folder' ? 'border-blue-200 bg-blue-50' : ''}`}>
               {f.type === 'folder' ? (
                 <div className="w-12 h-10 bg-gray-400 rounded-lg flex items-center justify-center relative">
                    <div className="absolute -top-1 left-0 w-5 h-2 bg-gray-400 rounded-t-md"></div>
                 </div>
               ) : (
                 <FileText size={40} className={f.type === 'doc' ? 'text-blue-500' : 'text-red-500'} />
               )}
               <span className="text-xs font-medium text-gray-600 truncate w-full text-center">{f.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-6">
          <button className={`w-14 h-14 rounded-xl bg-white text-gray-600 flex items-center justify-center shadow-lg transition-transform border border-gray-100 ${stepIndex === 1 ? 'animate-pulse scale-110 ring-4 ring-green-200' : ''}`}>
            <Plus size={32} className="text-red-500" />
          </button>
       </div>
    </div>
  );
}

// --- MAIN APP COMPONENT ---

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'hi'
  const [view, setView] = useState('flow'); // 'flow' or 'topic'
  const [activeTopicId, setActiveTopicId] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  // Derived state
  const activeTopic = COURSE_DATA.find(t => t.id === activeTopicId);

  const handleTopicClick = (id) => {
    setActiveTopicId(id);
    setStepIndex(0);
    setView('topic');
  };

  const handleNextStep = () => {
    if (stepIndex < activeTopic.steps.length - 1) {
      setStepIndex(prev => prev + 1);
    } else {
      // Topic Complete
      if (!completedTopics.includes(activeTopicId)) {
        setCompletedTopics([...completedTopics, activeTopicId]);
      }
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        setView('flow');
        setActiveTopicId(null);
      }, 2500);
    }
  };

  const handlePrevStep = () => {
    if (stepIndex > 0) setStepIndex(prev => prev - 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      
      {/* --- HEADER --- */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              AI
            </div>
            <h1 className="font-bold text-lg tracking-tight">
              {lang === 'en' ? 'Productivity Course' : 'प्रोडक्टिविटी कोर्स'}
            </h1>
          </div>
          
          <button 
            onClick={() => setLang(l => l === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium transition-colors"
          >
            <Languages size={16} />
            <span>{lang === 'en' ? 'हिंदी' : 'English'}</span>
          </button>
        </div>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="max-w-md mx-auto p-4 min-h-[calc(100vh-64px)] relative">

        {/* --- VIEW: FLOW DIAGRAM --- */}
        {view === 'flow' && (
          <div className="py-8 animate-fadeIn">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {lang === 'en' ? 'Your Learning Path' : 'आपका सीखने का रास्ता'}
              </h2>
              <p className="text-slate-500">
                {lang === 'en' ? 'Master these 4 tools to save time daily.' : 'रोज़ाना समय बचाने के लिए इन 4 टूल्स को सीखें।'}
              </p>
            </div>

            <div className="relative flex flex-col items-center gap-8">
              {/* Connecting Line */}
              <div className="absolute top-8 bottom-8 w-1 bg-slate-200 -z-10"></div>

              {COURSE_DATA.map((topic, index) => {
                const isCompleted = completedTopics.includes(topic.id);
                const isNext = !isCompleted && (index === 0 || completedTopics.includes(COURSE_DATA[index-1].id));
                const isLocked = !isCompleted && !isNext;

                return (
                  <button
                    key={topic.id}
                    disabled={isLocked}
                    onClick={() => handleTopicClick(topic.id)}
                    className={`group relative w-full max-w-xs p-4 rounded-2xl border-2 text-left transition-all duration-300 transform 
                      ${isCompleted 
                        ? 'bg-green-50 border-green-500/50' 
                        : isNext 
                          ? 'bg-white border-transparent shadow-xl scale-105 ring-4 ring-blue-50/50' 
                          : 'bg-white border-slate-200 opacity-60 grayscale'}
                    `}
                  >
                    {/* Status Badge */}
                    <div className={`absolute -right-3 -top-3 w-8 h-8 rounded-full flex items-center justify-center border-2 shadow-sm z-10
                      ${isCompleted ? 'bg-green-500 border-white text-white' : isNext ? 'bg-blue-600 border-white text-white animate-bounce' : 'bg-slate-200 border-white text-slate-400'}
                    `}>
                      {isCompleted ? <CheckCircle2 size={16} /> : <Play size={14} fill="currentColor" />}
                    </div>

                    {/* Active State Border Gradient Simulation */}
                    {isNext && (
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${topic.color} opacity-10 pointer-events-none`}></div>
                    )}
                    {isNext && (
                      <div className={`absolute -inset-[2px] rounded-2xl bg-gradient-to-br ${topic.color} opacity-40 -z-10 blur-sm`}></div>
                    )}

                    <div className="flex items-start gap-4 relative z-0">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${topic.color} text-white shadow-lg ${topic.shadow}`}>
                        {topic.id === 'gemini' && <Search size={24} />}
                        {topic.id === 'tasks' && <CheckSquare size={24} />}
                        {topic.id === 'keep' && <Grid size={24} />}
                        {topic.id === 'drive' && <Cloud size={24} />}
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg mb-1 ${isNext ? 'text-slate-800' : 'text-slate-700'}`}>
                          {topic.title[lang]}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {topic.desc[lang]}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* --- VIEW: TOPIC DETAIL --- */}
        {view === 'topic' && activeTopic && (
          <div className="animate-slideUp flex flex-col h-full gap-6">
            
            {/* Nav Bar */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setView('flow')}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <ChevronLeft />
              </button>
              <div className="flex-1">
                 <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                   <div 
                     className={`h-full bg-gradient-to-r ${activeTopic.color} transition-all duration-500`}
                     style={{ width: `${((stepIndex + 1) / activeTopic.steps.length) * 100}%` }}
                   ></div>
                 </div>
              </div>
              <span className="text-xs font-bold text-slate-400">
                {stepIndex + 1}/{activeTopic.steps.length}
              </span>
            </div>

            {/* Instruction Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeTopic.color}`}></div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                {activeTopic.steps[stepIndex].title[lang]}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {activeTopic.steps[stepIndex].text[lang]}
              </p>
            </div>

            {/* Interactive Visual Simulator Area */}
            <div className="flex-1 flex flex-col items-center justify-center min-h-[350px]">
              {activeTopic.id === 'gemini' && <GeminiSim stepIndex={stepIndex} lang={lang} />}
              {activeTopic.id === 'tasks' && <TasksSim stepIndex={stepIndex} lang={lang} />}
              {activeTopic.id === 'keep' && <KeepSim stepIndex={stepIndex} lang={lang} />}
              {activeTopic.id === 'drive' && <DriveSim stepIndex={stepIndex} lang={lang} />}
            </div>

            {/* Navigation Footer */}
            <div className="flex justify-between items-center mt-auto py-4">
              <button 
                onClick={handlePrevStep}
                disabled={stepIndex === 0}
                className="px-6 py-3 rounded-full text-slate-500 font-bold disabled:opacity-0 hover:bg-slate-100 transition-all"
              >
                {lang === 'en' ? 'Back' : 'पीछे'}
              </button>

              <button 
                onClick={handleNextStep}
                className={`group flex items-center gap-2 px-8 py-3 bg-gradient-to-r ${activeTopic.color} text-white rounded-full font-bold shadow-lg shadow-slate-300 active:scale-95 transition-all opacity-90 hover:opacity-100`}
              >
                <span>
                  {stepIndex === activeTopic.steps.length - 1 
                    ? (lang === 'en' ? 'Finish' : 'समाप्त') 
                    : (lang === 'en' ? 'Next Step' : 'अगला कदम')}
                </span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
        )}

        {/* --- CONFETTI OVERLAY --- */}
        {showConfetti && (
           <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-[100] bg-black/20 backdrop-blur-sm">
             <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center animate-bounce">
               <div className="text-6xl mb-4">🎉</div>
               <h2 className="text-2xl font-bold text-slate-800 mb-2">
                 {lang === 'en' ? 'Topic Mastered!' : 'शाबाश!'}
               </h2>
               <p className="text-slate-500">
                 {lang === 'en' ? 'You are one step closer to productivity.' : 'आप उत्पादकता के एक कदम और करीब हैं।'}
               </p>
             </div>
           </div>
        )}

      </main>
      
      {/* Global CSS for Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes popIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .animate-slideUp { animation: slideUp 0.5s ease-out; }
        .animate-popIn { animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .animate-slideIn { animation: slideUp 0.3s ease-out; }
      `}</style>
    </div>
  );
}
