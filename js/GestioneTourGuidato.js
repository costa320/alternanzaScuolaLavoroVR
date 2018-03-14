function CreazioneTourGuidato(){
                                        pannellum.viewer('panoramaContainer', {
                                            "default": {
                                                "firstScene": "EntrataPrincipaleFuoriDallaScuola",
                                                "author": "Constantin Iacovlev",
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
                                                        "pitch": 10,
                                                        "yaw": 80,
                                                        "type": "scene",
                                                        "text": "Entrata principale scuola visconti",
                                                        "sceneId": "EntrataPrincipaleDaDentro"
                                                    }]
                                                },

                                                "EntrataPrincipaleDaDentro": {
                                                    "title": "Entrata da dentro",
                                                    "hfov": 300,
                                                    "yaw": 180,
                                                    "pitch": 20, //giro asse y
                                                    "type": "equirectangular",
                                                    "panorama": "../img/entrataPrincipaleDaDentro.jpg",
                                                    "hotSpots": [{
                                                        "pitch": -10,
                                                        "yaw": 180,
                                                        "type": "scene",
                                                        "text": "Mason Circle",
                                                        "sceneId": "EntrataPrincipaleFuoriDallaScuola",
                                                        "targetYaw": -23,
                                                        "targetPitch": 2
                                                    }]
                                                }
                                            }
                                        });
}//end script