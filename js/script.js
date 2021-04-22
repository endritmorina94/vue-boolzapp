var app = new Vue({

    el: "#root",

    data: {

        contacts: [
        	{
        		name: 'Michele',
        		avatar: '_1',
                isActive: true,
        		visible: true,
        		messages: [
        			{
        				date: '10/01/2020 15:30:55',
        				text: 'Hai portato a spasso il cane?',
        				status: 'sent',
                        dropdown: false
        			},
        			{
        				date: '10/01/2020 15:50:00',
        				text: 'Ricordati di dargli da mangiare',
        				status: 'sent',
                        dropdown: false
        			},
        			{
        				date: '10/01/2020 16:15:22',
        				text: 'Tutto fatto!',
        				status: 'received',
                        dropdown: false
        			}
        		],
        	},
        	{
        		name: 'Fabio',
        		avatar: '_2',
                isActive: false,
        		visible: true,
        		messages: [
        			{
        				date: '20/03/2020 16:30:00',
        				text: 'Ciao come stai?',
        				status: 'sent',
                        dropdown: false
        			},
        			{
        				date: '20/03/2020 16:30:55',
        				text: 'Bene grazie! Stasera ci vediamo?',
        				status: 'received',
                        dropdown: false
        			},
        			{
        				date: '20/03/2020 16:35:00',
        				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
        				status: 'sent',
                        dropdown: false
        			}
        		],
        	},
        	{
        		name: 'Samuele',
        		avatar: '_3',
                isActive: false,
        		visible: true,
        		messages: [
        			{
        				date: '28/03/2020 10:10:40',
        				text: 'La Marianna va in campagna',
        				status: 'received',
                        dropdown: false
        			},
        			{
        				date: '28/03/2020 10:20:10',
        				text: 'Sicuro di non aver sbagliato chat?',
        				status: 'sent',
                        dropdown: false
        			},
        			{
        				date: '28/03/2020 16:15:22',
        				text: 'Ah scusa!',
        				status: 'received',
                        dropdown: false
        			}
        		],
        	},
        	{
        		name: 'Luisa',
        		avatar: '_6',
                isActive: false,
        		visible: true,
        		messages: [
        			{
        				date: '10/01/2020 15:30:55',
        				text: 'Lo sai che ha aperto una nuova pizzeria?',
        				status: 'sent',
                        dropdown: false
        			},
        			{
        				date: '10/01/2020 15:50:00',
        				text: 'Si, ma preferirei andare al cinema',
        				status: 'received',
                        dropdown: false
        			}
        		],
        	}
        ],

        //Creo un index base che mi servirà per indicare le informazioni di quale
        //contatto mostrare nella sezione Chat
        indexOfContact: 0,
        //
        // //Creo un array vuoto per immagazzinare i messaggi dell'utente
        // userMessages: [],

        //Creo una stringa vuota che poi assumerà la forma del messaggio digitato dall'utente
        newMessage: "",

        //Creo una variabile vuota che assuemerà la forma della ricerca effettuata dall'utente
        contactToFind: ""

    },

    methods: {

        //Creo una funzione che al click del contatto, nella lista contatti
        //assegnerà l'index del contatto cliccato alla variabile indexOfContact
        //index ==> index del contatto cliccato
        giveIndex(index) {
            this.indexOfContact = index;
        },

        //Creo una funzione che al click del bottone enter aggiungerà un oggetto all'array
        //dei messaggi del contatto con il messaggio dell'utente sotto la key text
        //e anche la data sotto la key date
        addMsg() {

            const messaggi = this.contacts[this.indexOfContact].messages;

            //Creo l'oggetto
            const msgObj = {
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                text: this.newMessage,
                status: 'sent'
            };

            //Lo pusho nell'array
            messaggi.push(msgObj);

            //Resetto l'input
            this.newMessage = "";

            //Setto un timeout un secondo dopo l'invio del messaggio da parte
            //dell'utente, creerà un messaggio di risposta "ok" e lo pusherà
            //nell'arrey dei messaggi
            setTimeout(() => {

                const risposta = {
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: "ok",
                    status: 'received'
                };

                messaggi.push(risposta);

            }, 1000);

        },

        //Creo una funzione che prenderà il valore digitato dall'utente e lo cercherà
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

        //Creo una funzione che al click sul messaggio, mostra una dropdown, nascondendo quelle già aperte
        //indice ==> è l'index del messaggio che mi viene passato dall'html
        showDropdown(indice) {

            const thisMessage = this.contacts[this.indexOfContact].messages[indice];

            if (thisMessage.dropdown == false) {

                this.contacts[this.indexOfContact].messages.forEach((element) => {
                    element.dropdown = false;
                });

                thisMessage.dropdown = !thisMessage.dropdown;

            } else {

                thisMessage.dropdown = !thisMessage.dropdown;

            }

        },

        //Creo una funzione che cancella il messaggio selezionato
        //indice ==> è l'index del messaggio che mi viene passato dall'html
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
        }

    }

});
