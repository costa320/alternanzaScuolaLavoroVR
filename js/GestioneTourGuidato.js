function CreazioneTourGuidato(){
                                        pannellum.viewer('panoramaContainer', {
                                            "default": {
                                                "firstScene": "-1",
                                                "author": "Laura,Filippo",
                                                "sceneFadeDuration": 1000,
                                                "autoLoad": true,
                                                "orientationOnByDefault": true,
                                                "autoRotate": 0,
                                                "compass": true,
                                            },

                                            "scenes": {

                                                "EntrataPrincipaleFuoriDallaScuola": {
                                                    "title": "Liceo Classico Statale Ennio Quirino Visconti di Roma",
                                                    "hfov": 300, //zoom
                                                    "pitch": 23, //giro asse y
                                                    "yaw": 46, //giro asse x
                                                    "type": "equirectangular",
                                                    "panorama": "../img/fronteScuola.jpg",
                                                    "hotSpots": [{
                                                        "pitch": 0,
                                                        "yaw": 80,
                                                        "type": "scene",
                                                        "text": "Entrata principale",
                                                        "sceneId": "-1"
                                                    }]
                                                },

                                                "-1": {
                                                    "title": "Il Collegio Romano era stato per tre secoli il centro di una intensissima attività educativa e culturale ad opera dei gesuiti. Fondato da Ignazio di Loyola nel 1551, occupava una posizione dominante all’interno della vasta costellazione dei Collegi gesuitici disseminati in tutta Europa. ",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/-1.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -10,
                                                        "yaw": 180,
                                                        "type": "scene",
                                                        "text": "ingresso",
                                                        "sceneId": "1",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },{
                                                        "pitch": -33,
                                                        "yaw": 0,
                                                        "type": "scene",
                                                        "text": "Entrata Principale",
                                                        "sceneId": "EntrataPrincipaleFuoriDallaScuola",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },]
                                                },
                                                "1": {
                                                    "title": "Questo è l'ingresso del Liceo classico statale “Ennio Quirino Visconti”, che fu istituito dopo la presa di Roma nel 1870 ed è il più antico della capitale. La scuola occupa una parte del complesso del Collegio Romano, costruito nella seconda metà del Cinquecento, che comprende la Chiesa di Sant’Ignazio e altri spazi appartenenti ai Gesuiti, mentre in un’altra ala ha sede il Ministero dei Beni culturali. ",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/1.jpg",
                                                    "hotSpots": [
                                                        {
                                                        "pitch": -25,
                                                        "yaw": 162,
                                                        "type": "scene",
                                                        "text": "cortile",
                                                        "sceneId": "2",
                                                        "targetYaw": -23, 
                                                        "targetPitch": 2
                                                                },  {
                                                        "pitch": -25,
                                                        "yaw": -20,
                                                        "type": "scene",
                                                        "text": "Entrata Principale",
                                                        "sceneId": "-1",
                                                        "targetYaw": -23, 
                                                        "targetPitch": 2
                                                                },
                                                        {
                                                        "pitch": -25,
                                                        "yaw": 73,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "3",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                                },
                                                        {
                                                        "pitch": -10,
                                                        "yaw": -110,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "4",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                                }
                                                                ]//end
                                                },
                                                "2": {
                                                    "title": "Dopo la conquista di Roma, il governo italiano, con decreto luogotenenziale, in applicazione della Legge n. 33 del 3 febbraio 1871, trasformò l’istituto dei gesuiti in Liceo Ginnasio Statale intitolandolo ad Ennio Quirino Visconti (1751-1818), illustre antichista, conservatore del Museo capitolino, professore d’archeologia all’Università di Parigi e membro del governo consolare durante il periodo napoleonico.",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/2.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -15,
                                                        "yaw": 165,
                                                        "type": "scene",
                                                        "text": "ingresso",
                                                        "sceneId": "1",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }]
                                                }
                                                ,
                                                "3": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/3.jpg",
                                                    "hotSpots": [
                                                        {
                                                        "pitch": -15,
                                                        "yaw": 75,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "5",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },
                                                        {
                                                        "pitch": -10,
                                                        "yaw": -20,
                                                        "type": "scene",
                                                        "text": "lapidi commemorative",
                                                        "sceneId": "11",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },  {
                                                        "pitch": -15,
                                                        "yaw": 165,
                                                        "type": "scene",
                                                        "text": "ingresso",
                                                        "sceneId": "1",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    } 
                                                    ]
                                                }
                                                
                                                ,
                                                "4": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/4.jpg",
                                                    "hotSpots": [
                                                        {
                                                        "pitch": -20,
                                                        "yaw": 75,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "7",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                        },
                                                        {
                                                        "pitch": -10,
                                                        "yaw": -20,
                                                        "type": "scene",
                                                        "text": "ingresso",
                                                        "sceneId": "1",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                        },
                                                        {
                                                        "pitch": -10,
                                                        "yaw": 170,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "8",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                        }
                                                                ]
                                                }
                                                ,
                                                "5": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/5.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -10,
                                                        "yaw": 185,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "6",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },{
                                                        "pitch": -20,
                                                        "yaw": 5,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "3",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }]
                                                }
                                                ,
                                                "6": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/6.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -5,
                                                        "yaw": 364,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "7",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },{
                                                        "pitch": -15,
                                                        "yaw": 97,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "5",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }]
                                                }
                                                ,
                                                "7": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/7.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -10,
                                                        "yaw": 348,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "4",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },{
                                                        "pitch": -10,
                                                        "yaw": 78,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "6",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }]
                                                }
                                                ,
                                                "8": {
                                                    "title": "",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/8.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -10,
                                                        "yaw": -3,
                                                        "type": "scene",
                                                        "text": "piano superiore",
                                                        "sceneId": "9",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },{
                                                        "pitch": -20,
                                                        "yaw": 280,
                                                        "type": "scene",
                                                        "text": "piano terra",
                                                        "sceneId": "4",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }]
                                                }
                                                ,
                                                "9": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/9.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -20,
                                                        "yaw":73,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "10",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },{
                                                        "pitch": -10,
                                                        "yaw":-105,
                                                        "type": "scene",
                                                        "text": "scale",
                                                        "sceneId": "8",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }]
                                                }
                                                ,
                                                "10": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/10.jpg",
                                                    "hotSpots": [
                                                        {
                                                        "pitch": -25,
                                                        "yaw": -10,
                                                        "type": "scene",
                                                        "text": "lapidi commemorative",
                                                        "sceneId": "11",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                            },
                                                            {
                                                        "pitch": -20,
                                                        "yaw": 75,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "12",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                            },     {
                                                        "pitch": -20,
                                                        "yaw": 166,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "9",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                            }
                                                    ]
                                                }
                                                ,
                                                "11": {
                                                    "title": "Romualdo Chiesa nasce a Roma il 31 Agosto 1922. Frequenta il Liceo ginnasio E. Q. Visconti. Durante l’occupazione tedesca della città continua a mettere a repentaglio la propria vita, lavora imperterrito per la liberazione della patria, partecipa all’organizzazione delle operazioni di rivolta contro il regime. Viene rinchiuso dai tedeschi nel carcere di via Tasso e ucciso il 24 marzo del 1944 alle Fosse Ardeatine.",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/11.jpg",
                                                    "hotSpots": [
                                                        {
                                                        "pitch": -35,
                                                        "yaw": 270,
                                                        "type": "scene",
                                                        "text": "piano terra",
                                                        "sceneId": "3",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                            },
                                                        {
                                                        "pitch": -25,
                                                        "yaw": 240,
                                                        "type": "scene",
                                                        "text": "piano superiore",
                                                        "sceneId": "10",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                            }
                                                    ]
                                                }
                                                ,
                                                "12": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/12.jpg",
                                                    "hotSpots": [
                                                        {
                                                        "pitch": -30,
                                                        "yaw": 360,
                                                        "type": "scene",
                                                        "text": "aula magna",
                                                        "sceneId": "13",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                        },
                                                         {
                                                        "pitch": -10,
                                                        "yaw": 78,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "14",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }, {
                                                        "pitch": -10,
                                                        "yaw": -90,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "10",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }
                                                    ]
                                                }
                                                ,
                                                "13": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/13.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -25,
                                                        "yaw": 87,
                                                        "type": "scene",
                                                        "text": "wunder musaeum",
                                                        "sceneId": "22",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },{
                                                        "pitch": -25,
                                                        "yaw": -55,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "12",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }]
                                                }
                                                ,
                                                "14": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/14.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -30,
                                                        "yaw": 175,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "15",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },{
                                                        "pitch": -15,
                                                        "yaw": 74,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "12",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    
                                                    } ]
                                                }
                                                ,
                                                "15": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/15.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -10,
                                                        "yaw": 365,
                                                        "type": "scene",
                                                        "text": "cappella Prima Primaria",
                                                        "sceneId": "16",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },
                                                                 {
                                                        "pitch": -10,
                                                        "yaw": 290,
                                                        "type": "scene",
                                                        "text": "laboratorio",
                                                        "sceneId": "17",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },
                                                                 {
                                                        "pitch": -27,
                                                        "yaw": 480,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "14",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },
                                                                ]
                                                }
                                                ,
                                                "16": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/16.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -10,
                                                        "yaw": 170,
                                                        "type": "scene",
                                                        "text": "",
                                                        "sceneId": "15",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }]
                                                }
                                                ,
                                                "17": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/17.jpg",
                                                    "hotSpots": [
                                                        {
                                                        "pitch": -10,
                                                        "yaw": 260,
                                                        "type": "scene",
                                                        "text": "terrazzo",
                                                        "sceneId": "20",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },
                                                                {
                                                        "pitch": -35,
                                                        "yaw": 90,
                                                        "type": "scene",
                                                        "text": "aula di scienze",
                                                        "sceneId": "18",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },
                                                                                                                               {
                                                        "pitch": -35,
                                                        "yaw": 140,
                                                        "type": "scene",
                                                        "text": "piano inferiore",
                                                        "sceneId": "15",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    } ]
                                                }
                                                ,
                                                "18": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/18.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -10,
                                                        "yaw": 45,
                                                        "type": "scene",
                                                        "text": "terrazzo",
                                                        "sceneId": "19",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    },{
                                                        "pitch": 0,
                                                        "yaw": 207,
                                                        "type": "scene",
                                                        "text": "laboratorio",
                                                        "sceneId": "17",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }]
                                                }
                                                ,
                                                "19": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/19.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -25,
                                                        "yaw": -7,
                                                        "type": "scene",
                                                        "text": "aula di scienze",
                                                        "sceneId": "18",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }]
                                                }
                                                ,
                                                "20": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/20.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -25,
                                                        "yaw": 255,
                                                        "type": "scene",
                                                        "text": "laboratorio",
                                                        "sceneId": "17",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }]
                                                }
                                                
                                                
                                                ,
                                                "22": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/22.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -25,
                                                        "yaw": 250,
                                                        "type": "scene",
                                                        "text": "aula magna",
                                                        "sceneId": "13",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }]
                                                }
                                            }//end
                                        });
}//end script