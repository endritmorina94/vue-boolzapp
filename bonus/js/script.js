var app = new Vue({

    el: "#root",

    data: {

        user: {
            name: "Endrit Morina",
            avatar: "_1",
            stato: "Ciao curiosone :)"
        },

        contacts: [
        	{
        		name: 'Vittorio S.',
        		avatar: '_9',
                isActive: true,
        		visible: true,
                stato: 'Hey there! I am using WhatsApp, capra!',
                numero: "+39 349 161 2398",
                newMessage: {
                    newMsg: false,
                    numNewMsg: 0
                },
        		messages: [
        			{
        				date: '10/01/2020 15:30:55',
        				text: 'Hai aperto un altro ticket?',
        				status: 'received',
                        dropdown: false
        			},
        			{
        				date: '10/01/2020 15:50:00',
        				text: 'Ci hai pensato su bene prima di rompere i coglioni ai tutor!?',
        				status: 'received',
                        dropdown: false
        			},
        			{
        				date: '10/01/2020 16:15:22',
        				text: 'Ehm.. no.',
        				status: 'sent',
                        state: [
                            {
                                sent: true,
                            },
                            {
                                delivered: true,
                            },
                            {
                                seen: true,
                            }
                        ],
                        dropdown: false
        			},
                    {
        				date: '10/01/2020 16:16:05',
        				text: 'CAPRA CAPRA CAPRA CAPRA CAPRA CAPRA!',
        				status: 'received',
                        dropdown: false
        			}
        		]
        	},
        	{
        		name: 'Angelo Pintus',
        		avatar: '_2',
                isActive: false,
        		visible: true,
                stato: 'Hai cacato?',
                numero: "+39 364 542 2557",
                newMessage: {
                    newMsg: false,
                    numNewMsg: 0
                },
        		messages: [
        			{
        				date: '20/03/2020 16:30:00',
        				text: 'Ciao come stai?',
        				status: 'sent',
                        state: [
                            {
                                sent: false
                            },
                            {
                                delivered: true
                            },
                            {
                                seen: true
                            }
                        ],
                        dropdown: false
        			},
        			{
        				date: '20/03/2020 16:50:55',
        				text: 'HAI CACATO?',
        				status: 'received',
                        dropdown: false
        			},
        			{
        				date: '20/03/2020 16:51:00',
        				text: 'basta Angelo, non fa pi?? ridere!',
        				status: 'sent',
                        state: [
                            {
                                sent: false
                            },
                            {
                                delivered: true
                            },
                            {
                                seen: true
                            }
                        ],
                        dropdown: false
        			}
        		]
        	},
        	{
        		name: 'Aziz Kebabbaro',
        		avatar: '_3',
                isActive: false,
        		visible: true,
                stato: 'Hey there! I am using WhatsApp.',
                numero: "+39 368 871 6582",
                newMessage: {
                    newMsg: false,
                    numNewMsg: 0
                },
        		messages: [
        			{
        				date: '28/03/2020 10:10:40',
        				text: 'Ciao Aziz, mi fai il solito per le 20?',
        				status: 'sent',
                        state: [
                            {
                                sent: false
                            },
                            {
                                delivered: true
                            },
                            {
                                seen: true
                            }
                        ],
                        dropdown: false
        			},
        			{
        				date: '28/03/2020 10:12:10',
        				text: 'grazie',
        				status: 'sent',
                        state: [
                            {
                                sent: false
                            },
                            {
                                delivered: true
                            },
                            {
                                seen: true
                            }
                        ],
                        dropdown: false
        			},
        			{
        				date: '28/03/2020 16:15:22',
        				text: 'Shao belo, 4 panini e 1 piadina, sciusto?',
        				status: 'received',
                        dropdown: false
        			}
        		]
        	},
            {
        		name: 'Elio',
        		avatar: '_5',
                isActive: false,
        		visible: true,
                stato: 'Hey there! I am using WhatsApp.',
                numero: "+39 387 587 5627",
                newMessage: {
                    newMsg: false,
                    numNewMsg: 0
                },
        		messages: [
        			{
        				date: '28/03/2020 07:05:40',
        				text: 'La Marianna va in campagna',
        				status: 'received',
                        dropdown: false
        			},
        			{
        				date: '28/03/2020 07:20:10',
        				text: 'Sicuro di non aver sbagliato chat?',
        				status: 'sent',
                        state: [
                            {
                                sent: false
                            },
                            {
                                delivered: true
                            },
                            {
                                seen: true
                            }
                        ],
                        dropdown: false
        			},
        			{
        				date: '28/03/2020 11:15:22',
        				text: 'Ah scusa!',
        				status: 'received',
                        dropdown: false
        			}
        		]
        	},
            {
        		name: 'Diletta <3',
        		avatar: '_4',
                isActive: false,
        		visible: true,
                stato: 'Teso, mi manchi troppo <3',
                numero: "+39 324 551 1628",
                newMessage: {
                    newMsg: false,
                    numNewMsg: 0
                },
        		messages: [
        			{
        				date: '28/03/2020 09:41:40',
        				text: 'Ora basta, sono stufa!',
        				status: 'received',
                        dropdown: false
        			},
        			{
        				date: '28/03/2020 10:11:10',
        				text: 'Da quando hai iniziato quel maledetto corso Boolean non ci sei pi??!!',
        				status: 'received',
                        dropdown: false
        			},
        			{
        				date: '28/03/2020 13:15:22',
        				text: 'Perdonami tesoro ma ci tengo troppo a questo corso e penso che dovremmo prenderci una pausa fino ad Agosto..',
        				status: 'sent',
                        state: [
                            {
                                sent: false
                            },
                            {
                                delivered: true
                            },
                            {
                                seen: true
                            }
                        ],
                        dropdown: false
        			},
                    {
        				date: '28/03/2020 13:21:30',
        				text: 'Sei solo un bastardo.. Cosa diavolo ha il CSS che io non ho!?',
        				status: 'received',
                        dropdown: false
        			}
        		]
        	},
        	{
        		name: 'Tony Spark',
        		avatar: '_6',
                isActive: false,
        		visible: true,
                stato: 'Hey there! I am using WhatsApp.',
                numero: "+39 349 161 2398",
                newMessage: {
                    newMsg: false,
                    numNewMsg: 0
                },
        		messages: [
        			{
        				date: '10/01/2020 15:30:55',
        				text: 'Lo sai che ha aperto una nuova pizzeria?',
        				status: 'sent',
                        state: [
                            {
                                sent: false
                            },
                            {
                                delivered: true
                            },
                            {
                                seen: true
                            }
                        ],
                        dropdown: false
        			},
        			{
        				date: '10/01/2020 15:50:00',
        				text: 'Si, ma preferirei andare al cinema',
        				status: 'received',
                        dropdown: false
        			}
        		]
        	},
            {
        		name: 'Hugo',
        		avatar: '_7',
                isActive: false,
        		visible: true,
                stato: 'Hey there! I am using WhatsApp.',
                numero: "+39 349 161 2398",
                newMessage: {
                    newMsg: false,
                    numNewMsg: 0
                },
        		messages: [
        			{
        				date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
        				status: 'sent',
                        state: [
                            {
                                sent: false
                            },
                            {
                                delivered: true
                            },
                            {
                                seen: true
                            }
                        ],
                        dropdown: false
        			},
        			{
        				date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
        				status: 'sent',
                        state: [
                            {
                                sent: false
                            },
                            {
                                delivered: true
                            },
                            {
                                seen: true
                            }
                        ],
                        dropdown: false
        			},
                    {
        				date: '10/01/2020 15:50:00',
                        text: 'Tutto fatto!',
        				status: 'received',
                        dropdown: false
        			}
        		]
        	},
            {
        		name: 'Daniel Wu',
        		avatar: '_8',
                isActive: false,
        		visible: true,
                stato: 'Hey there! I am using WhatsApp.',
                numero: "+39 358 158 5558",
                newMessage: {
                    newMsg: false,
                    numNewMsg: 0
                },
                messages: [
        			{
        				date: '10/01/2020 15:30:55',
                        text: 'Ciao Dani, amo troppo il tuo ruolo in into the badlands..',
        				status: 'sent',
                        state: [
                            {
                                sent: false
                            },
                            {
                                delivered: true
                            },
                            {
                                seen: true
                            }
                        ],
                        dropdown: false
        			},
        			{
        				date: '10/01/2020 15:50:00',
                        text: 'Rispondimi Dani, sono un tuo fan',
        				status: 'sent',
                        state: [
                            {
                                sent: false
                            },
                            {
                                delivered: true
                            },
                            {
                                seen: true
                            }
                        ],
                        dropdown: false
        			}
        		]
        	},
            {
        		name: 'Cristiano',
        		avatar: '_10',
                isActive: false,
        		visible: true,
                stato: 'Hey there! I am using WhatsApp.',
                numero: "+39 324 874 4288",
                newMessage: {
                    newMsg: false,
                    numNewMsg: 0
                },
                messages: [
        			{
        				date: '10/01/2020 15:30:55',
                        text: 'Ciao, hai portato a spasso il gatto?',
        				status: 'received',
                        dropdown: false
        			},
        			{
        				date: '10/01/2020 15:50:00',
                        text: 'Si, tu?',
        				status: 'sent',
                        state: [
                            {
                                sent: false
                            },
                            {
                                delivered: true
                            },
                            {
                                seen: true
                            }
                        ],
                        dropdown: false
        			},
                    {
        				date: '10/01/2020 15:30:55',
                        text: 'No, ma piovono rubinetti',
        				status: 'received',
                        dropdown: false
        			},
                    {
        				date: '10/01/2020 15:50:00',
                        text: 'Nella vita non si pu?? mai sapere',
        				status: 'sent',
                        state: [
                            {
                                sent: false
                            },
                            {
                                delivered: true
                            },
                            {
                                seen: true
                            }
                        ],
                        dropdown: false
        			}
        		]
        	}
        ],

        //Creo un index base che mi servir?? per indicare le informazioni di quale
        //contatto mostrare nella sezione Chat
        indexOfContact: 0,

        //Creo una stringa vuota che poi assumer?? la forma del messaggio digitato dall'utente
        newMessage: '',

        //Creo una variabile vuota che assuemer?? la forma della ricerca effettuata dall'utente
        contactToFind: '',

        //Creo una variabile che dar?? il nome alla classe per nascondere gli elementi
        hidingClass: '',

        randomAnswers: [
            'S??, poi passo a prenderti',
            'ok, a dopo zingaro',
            'No senti stasera proprio non posso',
            'finisco la warzonata e arrivo',
            'La verdura di una volta aveva tutto un altro sapore',
            'Non si finisce mai di imparare',
            'Di questo passo chiss?? dove andremo a finire'

        ],

        vitRandomAnswers: [
            'zitta CAPRA!',
            'sei solo una capra, zitto!!',
            'e non rompermi il cazzo con i tuoi messaggi!',
        ],

        azizRandomAnswers: [
            'piadina faccio senza shipolla?',
            'meto poco picante?',
            'un panino senza keshap alora',
        ],

        elioRandomAnswers: [
            'a parte che saranno cazzi miei..',
            'Beh, a parte il fatto che sono cazzi miei..',
            'Ti invito a ripensare al tuo percorso artistico',
        ],

        backGroundWhite: false,

        contactInfoWindow: false,

        userInfoWindow: false,

        iconChecked: false

    },

    methods: {

        //Creo una funzione che al click del contatto, nella lista contatti
        //assegner?? l'index del contatto cliccato alla variabile indexOfContact
        //index ==> index del contatto cliccato
        giveIndex(index) {

            this.indexOfContact = index;
            this.contacts[this.indexOfContact].newMessage.newMsg = false;
            this.contacts[this.indexOfContact].newMessage.numNewMsg = 0;

            //Faccio scrollare all'ultimo messaggio la chat alla sua apertura
            this.scrollToLast();


        },

        //Creo una funzione che al click del bottone enter aggiunger?? un oggetto all'array
        //dei messaggi del contatto con il messaggio dell'utente sotto la key text
        //e anche la data sotto la key date
        addMsg() {

            if (this.newMessage != "") {

                const messaggi = this.contacts[this.indexOfContact].messages;
                const contatto = this.contacts[this.indexOfContact];

                //Creo l'oggetto
                const msgObj = {
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: this.newMessage,
                    status: 'sent',
                    state: [
                        {
                            sent: true
                        },
                        {
                            delivered: false
                        },
                        {
                            seen: false
                        }
                    ],
                    dropdown: false
                };

                //Lo pusho nell'array
                messaggi.push(msgObj);

                //Resetto l'input
                this.newMessage = "";

                //Porto il contatto in cima alla lista dei contatti
                this.contacts.splice(0, 0, this.contacts.splice(this.contacts.indexOf(contatto), 1)[0]);

                //Resetto a zero l'index del contatto per farmi tornare i suoi messaggi nella chat
                this.indexOfContact = 0;

                //Faccio scrollare la finestra verso l'ultimo messaggio
                this.scrollToLastSmooth();

                //Setto un timeout che cambia l'icona del messaggio da inviato a ricevuto 2 secondi dopo l'invio
                setTimeout(() => {

                    msgObj.state[0].sent = false;
                    msgObj.state[1].delivered = true;

                }, 2000);

                //Stabilisco un tempo random per la lettura del messaggio
                //da parte del contatto da 6 a 15 secondi
                const tempoRandom = Math.floor(Math.random()* (15000 - 6000)) + 6000;

                //Setto un timeout che in un range tra 10 e 60 dopo l'invio del messaggio da parte
                //dell'utente, cambier?? prima l'icona di stato del messeggio in SEEN(letto) e
                //creer?? un messaggio di risposta random pushandolo nell'arrey dei messaggi
                setTimeout(() => {

                    msgObj.state[2].seen = true;

                    setTimeout(() => {

                        function randomNumb(arrayLength) {
                            return Math.floor(Math.random() * arrayLength);
                        };

                        let risposta = "";

                        switch (contatto.name) {
                            case "Vittorio S.":
                                risposta = {
                                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                                    text: this.vitRandomAnswers[randomNumb(this.vitRandomAnswers.length)],
                                    status: 'received',
                                    dropdown: false
                                }

                                break;

                            case "Angelo Pintus":
                                risposta = {
                                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                                    text: "HAI CACATO?",
                                    status: 'received',
                                    dropdown: false
                                }

                                break;

                            case "Aziz Kebabbaro":
                                risposta = {
                                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                                    text: this.azizRandomAnswers[randomNumb(this.azizRandomAnswers.length)],
                                    status: 'received',
                                    dropdown: false
                                }

                                break;

                            case "Elio":
                                risposta = {
                                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                                    text: this.elioRandomAnswers[randomNumb(this.elioRandomAnswers.length)],
                                    status: 'received',
                                    dropdown: false
                                }

                                break;

                            default:

                                risposta = {
                                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                                    text: this.randomAnswers[randomNumb(this.randomAnswers.length)],
                                    status: 'received',
                                    dropdown: false
                                }

                        }

                        messaggi.push(risposta);

                        this.contacts.splice(0, 0, this.contacts.splice(this.contacts.indexOf(contatto), 1)[0]);

                        //Faccio scrollare la finestra verso l'ultimo messaggio
                        this.scrollToLastSmooth();

                        contatto.newMessage.numNewMsg += 1;
                        contatto.newMessage.newMsg = true;

                    }, 4000);

                }, tempoRandom);

            }

        },

        //Creo una funzione che prender?? il valore digitato dall'utente e lo cercher??
        //tra i nomi dei contatti, mostrando poi quelli trovati e nascondendo quelli non trovati
        find() {

            this.contacts.forEach((element) => {

                const contactName = element.name.toLowerCase();
                const userResearch = this.contactToFind.toLowerCase();

                if (!contactName.includes(userResearch)){
                    element.visible = false;
                } else {
                    element.visible = true;
                }

            });


        },

        //Creo una funzione che al click sul messaggio, mostra una dropdown, nascondendo quelle gi?? aperte
        //indice ==> ?? l'index del messaggio che mi viene passato dall'html
        showDropdown(indice) {

            const thisMessage = this.contacts[this.indexOfContact].messages[indice];

            if (thisMessage.dropdown == false) {

                this.contacts[this.indexOfContact].messages.forEach((element) => {
                    element.dropdown = false;
                });

                thisMessage.dropdown = true;

            } else {

                thisMessage.dropdown = false;

            }

        },

        //Creo una funzione che cancella il messaggio selezionato
        //indice ==> ?? l'index del messaggio che mi viene passato dall'html
        removeMsg(indice) {

            this.contacts[this.indexOfContact].messages.splice(indice, 1);

        },

        //Creo una funzione che toglie a tutti i contatti la classe active e la toggla
        //al contatto selezionato nella lista dei contatti
        addClassActive() {

            //Tolgo la classe active a tutti io contatti
            this.contacts.forEach((element) => {
                element.isActive = false;
            });

            //Togglo la classe active al contatto selezionato
            this.contacts[this.indexOfContact].isActive = !this.contacts[this.indexOfContact].isActive;
        },

        //Questa funzione cancella tutti i dropdown aperti nella pagina
        cleanDrops() {

            this.contacts[this.indexOfContact].messages.forEach((element) => {
                element.dropdown = false;
            });

        },

        //Questa funzione cambia il valore della variabile hidingClass,
        //con il nome della classe hide-element, verr?? usata per nascondere elementi html
        hideThis() {

            this.hidingClass = "hide-element";

        },

        //Questa funzione torner?? l'ultimo messaggio del contatto
        getLastMsg(contactIndex) {
            let messagesArray = this.contacts[contactIndex].messages;

            if (messagesArray.length > 0) {
                let lastMessage = messagesArray[messagesArray.length - 1].text;

                return lastMessage;

            //Se non ci sono messaggi...
            } else {
                return "";
            }

        },

        //Questa funzione torner?? l'ora dell'ultimo messaggio del contatto tagliandola dalla data
        getLastMsgDate(contactIndex) {
            let messagesArray = this.contacts[contactIndex].messages;

            if (messagesArray.length > 0) {
                let lastMessageDate = messagesArray[messagesArray.length - 1].date;

                return lastMessageDate.slice(-8, -3);

            //Se non ci sono messaggi...
            } else {
                return "";
            }

        },

        //Questa funzione chiud ei dropdown al click
        checkDropwdown(msgIndex) {

            return this.contacts[this.indexOfContact].messages[msgIndex].dropdown;

        },

        //Questa funzione controlla se il messaggio dopo ?? di tipo uguale o diverso
        checkNextMsg(msgIndex) {

            if (msgIndex > this.contacts[this.indexOfContact].messages.length - 2){
                return false;
            } else {
                return (this.contacts[this.indexOfContact].messages[msgIndex].status != this.contacts[this.indexOfContact].messages[msgIndex + 1].status);
            }

        },

        //Questa funzione controlla se il messaggio ?? inziato o ricevuto, utilizzata per dare il nome ad una classe
        checkMsgKind(msgIndex) {

            return this.contacts[this.indexOfContact].messages[msgIndex].status + "-msg";

        },

        //Questa funzione controlla se il messaggio ?? il primo del suo genere (ricevuti/inviati), utilizzata per aggiungere
        //una classe che aumenta la distanza
        checkIfFirst(msgIndex) {

            if (msgIndex > 0){

                if (this.contacts[this.indexOfContact].messages[msgIndex].status != this.contacts[this.indexOfContact].messages[msgIndex - 1].status){
                    return true;
                }

            } else if (msgIndex == 0){
                return true;
            }

        },

        //Questa funzione cancella le notifiche quando l'utente clicca nella input per digitare un nuovo messaggio
        //verso il contatto che da la notifica
        clearNotifications() {
            this.contacts[this.indexOfContact].newMessage.newMsg = false;
            this.contacts[this.indexOfContact].newMessage.numNewMsg = 0;
        },

        //Questa funzione scrolla fino ull'ultimo messaggio
        scrollToLast() {
            this.$nextTick(function () {
                let lastMessagesArray = document.getElementsByClassName('msg-cloud');
                let lastMessage = lastMessagesArray[lastMessagesArray.length - 1];
                lastMessage.scrollIntoView();
            });
        },

        //Questa funzione scrolla fino ull'ultimo messaggio ma con smooth behavior
        scrollToLastSmooth() {
            this.$nextTick(function () {
                let lastMessagesArray = document.getElementsByClassName('msg-cloud');
                let lastMessage = lastMessagesArray[lastMessagesArray.length - 1];
                lastMessage.scrollIntoView({behavior: 'smooth'});
            });
        },

        //Questa funzione cancella una chat
        deleteChat() {
            this.contacts.splice(this.indexOfContact, 1);
        },

    }

});
