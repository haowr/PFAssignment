(function() {
  'use strict';

  angular.module('postServices', [])
  .factory('Posts', function() {
    var Posts = {};

     // The array of posts //
     var thePosts = [
      [
        {
            last_modification_ts: 1511330402,
            creation_ts: 1511311742,
            deleted_ts: null,
            etc: {
                reactions: {
                    LIKE: {
                        count: 1,
                        users: [
                            [
                                "820532348061526",
                                "Paul Bell"
                            ]
                        ]
                    }
                },
                author_name: "PageFreezer",
                likes: [
                    [
                        "820532348061526",
                        "Paul Bell"
                    ]
                ],
                created_time: 1511311742,
                message: "EPA open #data under threat by #Trump __PF:fe12548f53efc58030e4",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                type: "link",
                status_type: "shared_story",
                picture: "__PF:303103af71aa4dee9f3b",
                description: "The United States Environmental Protection Agency (EPA) was created in 1970 to protect human health and the environment through creation and enforcement of",
                full_picture: "__PF:303103af71aa4dee9f3b",
                link: "__PF:fe12548f53efc58030e4",
                name: "EPA open data under threat by Trump",
                updated_time: 1511330402,
                caption: "greenprophet.com",
                author_id: "432721040100079"
            },
            changed_history: {
                51342: [
                    "misc"
                ]
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation",
            urls_mapping: {
                __PF330Af1aaDeeFb: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQAY0aRlnjs7cJnP&w=130&h=130&url=https%3A%2F%2Fwww.greenprophet.com%2Fwp-content%2Fuploads%2FTrumpEPAairquality.jpg&cfs=1&_nc_hash=AQAS6lSey8HRo-mg",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQAY0aRlnjs7cJnP&w=130&h=130&url=https%3A%2F%2Fwww.greenprophet.com%2Fwp-content%2Fuploads%2FTrumpEPAairquality.jpg&cfs=1&_nc_hash=AQAS6lSey8HRo-mg",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:303103af71aa4dee9f3b",
                    type: ""
                },
                __PFFe24F3efc83E: {
                    target_url: "https://www.greenprophet.com/2017/03/epa-open-data-under-threat-by-trump/?utm_content=63196929&utm_medium=social&utm_source=facebook",
                    internal_url: "",
                    source_url: "http://bit.ly/2A0wK6O",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:fe12548f53efc58030e4",
                    type: ""
                }
            },
            activity_type: "ST"
        },
        {
            last_modification_ts: 1511232191,
            sm_network: "FB",
            creation_ts: 1511215367,
            sm_object_id: "1659394080766096",
            deleted_ts: null,
            changed: [
            ],
            changed_stats: {
            },
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1511215367,
                message: "Where To Find Those EPA Web Pages Scrubbed By The #Trump Administration 😇  👉__PF:64dd91fc9b2400f84441",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:b0986dd49084d15d10bc",
                description: "The Environmental Protection Agency no longer features climate-change information on its main website, but the scrubbed pages are available from several sources..",
                full_picture: "__PF:b0986dd49084d15d10bc",
                link: "__PF:64dd91fc9b2400f84441",
                _access_token: null,
                name: "Where To Find Those EPA Web Pages Scrubbed By The Trump Administration",
                message_tags: null,
                updated_time: 1511232191,
                caption: "forbes.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PF6Dd1fcB40f44: {
                    target_url: "https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/jeffmcmahon/2017/05/02/where-to-find-epa-web-pages-scrubbed-by-the-trump-administration/&utm_content=63187134&utm_medium=social&utm_source=facebook&refURL=&referrer=",
                    internal_url: "",
                    source_url: "http://bit.ly/2zDLCHH",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:64dd91fc9b2400f84441",
                    type: ""
                },
                __PFB96dd98D5d0bc: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQALN-8_8lTDKeEz&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F622189289%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQDh6Dz_q5AnHJ6m",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQALN-8_8lTDKeEz&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F622189289%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQDh6Dz_q5AnHJ6m",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:b0986dd49084d15d10bc",
                    type: ""
                }
            },
            flagged: false,
            activity_type: "ST"
        },
        {
            last_modification_ts: 1511127344,
            sm_network: "FB",
            creation_ts: 1511118602,
            sm_object_id: "1658331427539028",
            deleted_ts: null,
            changed: [
            ],
            changed_stats: {
            },
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1511118602,
                message: "When An Online Presence is A Key Business Driver #Fortune500 #Business #SocialMedia  __PF:f815b8fe744627cf5d02",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:1440ebd51a3c0907b7d9",
                description: "PageFreezer is proud to have many Fortune 500 companies as clients for our website and social media archiving solution.",
                full_picture: "__PF:1440ebd51a3c0907b7d9",
                link: "__PF:f815b8fe744627cf5d02",
                _access_token: null,
                name: "Enterprise Class Website & Social Media Archiving - How to Archive Website & Social Media",
                message_tags: null,
                updated_time: 1511127344,
                caption: "pagefreezer.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PFF1BFe467cfD2: {
                    target_url: "https://www.pagefreezer.com/fortune-500/?utm_content=63187060&utm_medium=social&utm_source=facebook",
                    internal_url: "",
                    source_url: "http://bit.ly/2zG80QI",
                    downloaded: false,
                    state: -1,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:f815b8fe744627cf5d02",
                    type: ""
                },
                __PF14Ebd1aC97bD: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQCS7z0_CXxP-Ixm&url=https%3A%2F%2Fwww.pagefreezer.com%2Fwp-content%2Fuploads%2Fkey-business-driver.png&_nc_hash=AQAwMhl_wexPYh48",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQCS7z0_CXxP-Ixm&url=https%3A%2F%2Fwww.pagefreezer.com%2Fwp-content%2Fuploads%2Fkey-business-driver.png&_nc_hash=AQAwMhl_wexPYh48",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:1440ebd51a3c0907b7d9",
                    type: ""
                }
            },
            activity_type: "ST"
        },
        {
            last_modification_ts: 1511330402,
            sm_network: "FB",
            creation_ts: 1511052603,
            sm_object_id: "1657604390945065",
            deleted_ts: null,
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1511052603,
                message: "'The Devolution Will Be Televised' -  Keeping #history Safe __PF:ad3fa7d40fd84d64c511",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:4ff13105958ed27ec99b",
                description: "Preserving the public record on television is becoming an ever-more-urgent task and critical challenge for the country and the world.",
                full_picture: "__PF:1a70967790fecdc60c50",
                link: "__PF:ad3fa7d40fd84d64c511",
                _access_token: null,
                name: "The Devolution Will Be Televised",
                message_tags: null,
                updated_time: 1511330402,
                caption: "thenation.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
                51342: [
                    "misc"
                ]
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PFAdFaD0fd4d4c1: {
                    target_url: "https://www.thenation.com/article/the-devolution-will-be-televised/?utm_content=63187028&utm_medium=social&utm_source=facebook",
                    internal_url: "",
                    source_url: "http://bit.ly/2zEI7AF",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:ad3fa7d40fd84d64c511",
                    type: ""
                },
                __PF1a0670fecdc0c0: {
                    target_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/23794287_23842700742570060_314265291079024640_n.jpg?oh=d04a0333b83b6cc85be5ba9910603cd4&oe=5A9EB324",
                    internal_url: "",
                    source_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/23794287_23842700742570060_314265291079024640_n.jpg?oh=d04a0333b83b6cc85be5ba9910603cd4&oe=5A9EB324",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:1a70967790fecdc60c50",
                    type: ""
                },
                __PF4ff3098ed7ec9b: {
                    target_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/c38.0.130.130/p130x130/23794287_23842700742570060_314265291079024640_n.jpg?oh=b44c850fed4c52c4e0b60f9956d9fa89&oe=5A9C254F",
                    internal_url: "",
                    source_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/c38.0.130.130/p130x130/23794287_23842700742570060_314265291079024640_n.jpg?oh=b44c850fed4c52c4e0b60f9956d9fa89&oe=5A9C254F",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:4ff13105958ed27ec99b",
                    type: ""
                }
            },
            flagged: false,
            activity_type: "ST"
        },
        {
            last_modification_ts: 1510955701,
            sm_network: "FB",
            creation_ts: 1510945527,
            sm_object_id: "1656439654394872",
            deleted_ts: null,
            changed: [
            ]
            ,changed_stats: {
            },
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1510945527,
                message: "Why Are Libraries Failing At Web #Archiving And Are We Losing Our Digital #History? 😵__PF:10d2aea51c1783239a02",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:27b5becaa60f5d52d178",
                description: "Have libraries become irrelevant in the web archiving world and how can they learn from their technological neighbors who have the same needs?",
                full_picture: "__PF:27b5becaa60f5d52d178",
                link: "__PF:10d2aea51c1783239a02",
                _access_token: null,
                name: "Why Are Libraries Failing At Web Archiving And Are We Losing Our Digital History?",
                message_tags: null,
                updated_time: 1510955701,
                caption: "forbes.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PF1DAea1c733A2: {
                    target_url: "https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/kalevleetaru/2017/03/27/why-are-libraries-failing-at-web-archiving-and-are-we-losing-our-digital-history/&utm_content=63186958&utm_medium=social&utm_source=facebook&refURL=&referrer=",
                    internal_url: "",
                    source_url: "http://bit.ly/2A2smEo",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:10d2aea51c1783239a02",
                    type: ""
                },
                __PF2BBecaa0fD2d7: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQBjgj1ynRIXjuQA&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F589089299%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQCyOSEXob5pq3iI",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQBjgj1ynRIXjuQA&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F589089299%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQCyOSEXob5pq3iI",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:27b5becaa60f5d52d178",
                    type: ""
                }
            },
            flagged: false,
            activity_type: "ST"
        }
    ],
          [
        {
            last_modification_ts: 1511330402,
            creation_ts: 1511311742,
            deleted_ts: null,
            etc: {
                reactions: {
                    LIKE: {
                        count: 1,
                        users: [
                            [
                                "820532348061526",
                                "Paul Bell"
                            ]
                        ]
                    }
                },
                author_name: "PageFreezer",
                likes: [
                    [
                        "820532348061526",
                        "Paul Bell"
                    ]
                ],
                created_time: 1511311742,
                message: "EPA open #data under threat by #Trump __PF:fe12548f53efc58030e4",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                type: "link",
                status_type: "shared_story",
                picture: "__PF:303103af71aa4dee9f3b",
                description: "The United States Environmental Protection Agency (EPA) was created in 1970 to protect human health and the environment through creation and enforcement of",
                full_picture: "__PF:303103af71aa4dee9f3b",
                link: "__PF:fe12548f53efc58030e4",
                name: "EPA open data under threat by Trump",
                updated_time: 1511330402,
                caption: "greenprophet.com",
                author_id: "432721040100079"
            },
            changed_history: {
                51342: [
                    "misc"
                ]
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation",
            urls_mapping: {
                __PF330Af1aaDeeFb: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQAY0aRlnjs7cJnP&w=130&h=130&url=https%3A%2F%2Fwww.greenprophet.com%2Fwp-content%2Fuploads%2FTrumpEPAairquality.jpg&cfs=1&_nc_hash=AQAS6lSey8HRo-mg",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQAY0aRlnjs7cJnP&w=130&h=130&url=https%3A%2F%2Fwww.greenprophet.com%2Fwp-content%2Fuploads%2FTrumpEPAairquality.jpg&cfs=1&_nc_hash=AQAS6lSey8HRo-mg",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:303103af71aa4dee9f3b",
                    type: ""
                },
                __PFFe24F3efc83E: {
                    target_url: "https://www.greenprophet.com/2017/03/epa-open-data-under-threat-by-trump/?utm_content=63196929&utm_medium=social&utm_source=facebook",
                    internal_url: "",
                    source_url: "http://bit.ly/2A0wK6O",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:fe12548f53efc58030e4",
                    type: ""
                }
            },
            activity_type: "ST"
        },
        {
            last_modification_ts: 1511232191,
            sm_network: "FB",
            creation_ts: 1511215367,
            sm_object_id: "1659394080766096",
            deleted_ts: null,
            changed: [
            ],
            changed_stats: {
            },
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1511215367,
                message: "Where To Find Those EPA Web Pages Scrubbed By The #Trump Administration 😇  👉__PF:64dd91fc9b2400f84441",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:b0986dd49084d15d10bc",
                description: "The Environmental Protection Agency no longer features climate-change information on its main website, but the scrubbed pages are available from several sources..",
                full_picture: "__PF:b0986dd49084d15d10bc",
                link: "__PF:64dd91fc9b2400f84441",
                _access_token: null,
                name: "Where To Find Those EPA Web Pages Scrubbed By The Trump Administration",
                message_tags: null,
                updated_time: 1511232191,
                caption: "forbes.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PF6Dd1fcB40f44: {
                    target_url: "https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/jeffmcmahon/2017/05/02/where-to-find-epa-web-pages-scrubbed-by-the-trump-administration/&utm_content=63187134&utm_medium=social&utm_source=facebook&refURL=&referrer=",
                    internal_url: "",
                    source_url: "http://bit.ly/2zDLCHH",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:64dd91fc9b2400f84441",
                    type: ""
                },
                __PFB96dd98D5d0bc: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQALN-8_8lTDKeEz&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F622189289%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQDh6Dz_q5AnHJ6m",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQALN-8_8lTDKeEz&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F622189289%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQDh6Dz_q5AnHJ6m",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:b0986dd49084d15d10bc",
                    type: ""
                }
            },
            flagged: false,
            activity_type: "ST"
        },
        {
            last_modification_ts: 1511127344,
            sm_network: "FB",
            creation_ts: 1511118602,
            sm_object_id: "1658331427539028",
            deleted_ts: null,
            changed: [
            ],
            changed_stats: {
            },
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1511118602,
                message: "When An Online Presence is A Key Business Driver #Fortune500 #Business #SocialMedia  __PF:f815b8fe744627cf5d02",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:1440ebd51a3c0907b7d9",
                description: "PageFreezer is proud to have many Fortune 500 companies as clients for our website and social media archiving solution.",
                full_picture: "__PF:1440ebd51a3c0907b7d9",
                link: "__PF:f815b8fe744627cf5d02",
                _access_token: null,
                name: "Enterprise Class Website & Social Media Archiving - How to Archive Website & Social Media",
                message_tags: null,
                updated_time: 1511127344,
                caption: "pagefreezer.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PFF1BFe467cfD2: {
                    target_url: "https://www.pagefreezer.com/fortune-500/?utm_content=63187060&utm_medium=social&utm_source=facebook",
                    internal_url: "",
                    source_url: "http://bit.ly/2zG80QI",
                    downloaded: false,
                    state: -1,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:f815b8fe744627cf5d02",
                    type: ""
                },
                __PF14Ebd1aC97bD: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQCS7z0_CXxP-Ixm&url=https%3A%2F%2Fwww.pagefreezer.com%2Fwp-content%2Fuploads%2Fkey-business-driver.png&_nc_hash=AQAwMhl_wexPYh48",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQCS7z0_CXxP-Ixm&url=https%3A%2F%2Fwww.pagefreezer.com%2Fwp-content%2Fuploads%2Fkey-business-driver.png&_nc_hash=AQAwMhl_wexPYh48",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:1440ebd51a3c0907b7d9",
                    type: ""
                }
            },
            activity_type: "ST"
        },
        {
            last_modification_ts: 1511330402,
            sm_network: "FB",
            creation_ts: 1511052603,
            sm_object_id: "1657604390945065",
            deleted_ts: null,
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1511052603,
                message: "'The Devolution Will Be Televised' -  Keeping #history Safe __PF:ad3fa7d40fd84d64c511",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:4ff13105958ed27ec99b",
                description: "Preserving the public record on television is becoming an ever-more-urgent task and critical challenge for the country and the world.",
                full_picture: "__PF:1a70967790fecdc60c50",
                link: "__PF:ad3fa7d40fd84d64c511",
                _access_token: null,
                name: "The Devolution Will Be Televised",
                message_tags: null,
                updated_time: 1511330402,
                caption: "thenation.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
                51342: [
                    "misc"
                ]
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PFAdFaD0fd4d4c1: {
                    target_url: "https://www.thenation.com/article/the-devolution-will-be-televised/?utm_content=63187028&utm_medium=social&utm_source=facebook",
                    internal_url: "",
                    source_url: "http://bit.ly/2zEI7AF",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:ad3fa7d40fd84d64c511",
                    type: ""
                },
                __PF1a0670fecdc0c0: {
                    target_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/23794287_23842700742570060_314265291079024640_n.jpg?oh=d04a0333b83b6cc85be5ba9910603cd4&oe=5A9EB324",
                    internal_url: "",
                    source_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/23794287_23842700742570060_314265291079024640_n.jpg?oh=d04a0333b83b6cc85be5ba9910603cd4&oe=5A9EB324",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:1a70967790fecdc60c50",
                    type: ""
                },
                __PF4ff3098ed7ec9b: {
                    target_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/c38.0.130.130/p130x130/23794287_23842700742570060_314265291079024640_n.jpg?oh=b44c850fed4c52c4e0b60f9956d9fa89&oe=5A9C254F",
                    internal_url: "",
                    source_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/c38.0.130.130/p130x130/23794287_23842700742570060_314265291079024640_n.jpg?oh=b44c850fed4c52c4e0b60f9956d9fa89&oe=5A9C254F",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:4ff13105958ed27ec99b",
                    type: ""
                }
            },
            flagged: false,
            activity_type: "ST"
        },
        {
            last_modification_ts: 1510955701,
            sm_network: "FB",
            creation_ts: 1510945527,
            sm_object_id: "1656439654394872",
            deleted_ts: null,
            changed: [
            ]
            ,changed_stats: {
            },
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1510945527,
                message: "Why Are Libraries Failing At Web #Archiving And Are We Losing Our Digital #History? 😵__PF:10d2aea51c1783239a02",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:27b5becaa60f5d52d178",
                description: "Have libraries become irrelevant in the web archiving world and how can they learn from their technological neighbors who have the same needs?",
                full_picture: "__PF:27b5becaa60f5d52d178",
                link: "__PF:10d2aea51c1783239a02",
                _access_token: null,
                name: "Why Are Libraries Failing At Web Archiving And Are We Losing Our Digital History?",
                message_tags: null,
                updated_time: 1510955701,
                caption: "forbes.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PF1DAea1c733A2: {
                    target_url: "https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/kalevleetaru/2017/03/27/why-are-libraries-failing-at-web-archiving-and-are-we-losing-our-digital-history/&utm_content=63186958&utm_medium=social&utm_source=facebook&refURL=&referrer=",
                    internal_url: "",
                    source_url: "http://bit.ly/2A2smEo",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:10d2aea51c1783239a02",
                    type: ""
                },
                __PF2BBecaa0fD2d7: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQBjgj1ynRIXjuQA&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F589089299%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQCyOSEXob5pq3iI",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQBjgj1ynRIXjuQA&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F589089299%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQCyOSEXob5pq3iI",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:27b5becaa60f5d52d178",
                    type: ""
                }
            },
            flagged: false,
            activity_type: "ST"
        }
    ],
          [
        {
            last_modification_ts: 1511330402,
            creation_ts: 1511311742,
            deleted_ts: null,
            etc: {
                reactions: {
                    LIKE: {
                        count: 1,
                        users: [
                            [
                                "820532348061526",
                                "Paul Bell"
                            ]
                        ]
                    }
                },
                author_name: "PageFreezer",
                likes: [
                    [
                        "820532348061526",
                        "Paul Bell"
                    ]
                ],
                created_time: 1511311742,
                message: "EPA open #data under threat by #Trump __PF:fe12548f53efc58030e4",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                type: "link",
                status_type: "shared_story",
                picture: "__PF:303103af71aa4dee9f3b",
                description: "The United States Environmental Protection Agency (EPA) was created in 1970 to protect human health and the environment through creation and enforcement of",
                full_picture: "__PF:303103af71aa4dee9f3b",
                link: "__PF:fe12548f53efc58030e4",
                name: "EPA open data under threat by Trump",
                updated_time: 1511330402,
                caption: "greenprophet.com",
                author_id: "432721040100079"
            },
            changed_history: {
                51342: [
                    "misc"
                ]
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation",
            urls_mapping: {
                __PF330Af1aaDeeFb: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQAY0aRlnjs7cJnP&w=130&h=130&url=https%3A%2F%2Fwww.greenprophet.com%2Fwp-content%2Fuploads%2FTrumpEPAairquality.jpg&cfs=1&_nc_hash=AQAS6lSey8HRo-mg",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQAY0aRlnjs7cJnP&w=130&h=130&url=https%3A%2F%2Fwww.greenprophet.com%2Fwp-content%2Fuploads%2FTrumpEPAairquality.jpg&cfs=1&_nc_hash=AQAS6lSey8HRo-mg",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:303103af71aa4dee9f3b",
                    type: ""
                },
                __PFFe24F3efc83E: {
                    target_url: "https://www.greenprophet.com/2017/03/epa-open-data-under-threat-by-trump/?utm_content=63196929&utm_medium=social&utm_source=facebook",
                    internal_url: "",
                    source_url: "http://bit.ly/2A0wK6O",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:fe12548f53efc58030e4",
                    type: ""
                }
            },
            activity_type: "ST"
        },
        {
            last_modification_ts: 1511232191,
            sm_network: "FB",
            creation_ts: 1511215367,
            sm_object_id: "1659394080766096",
            deleted_ts: null,
            changed: [
            ],
            changed_stats: {
            },
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1511215367,
                message: "Where To Find Those EPA Web Pages Scrubbed By The #Trump Administration 😇  👉__PF:64dd91fc9b2400f84441",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:b0986dd49084d15d10bc",
                description: "The Environmental Protection Agency no longer features climate-change information on its main website, but the scrubbed pages are available from several sources..",
                full_picture: "__PF:b0986dd49084d15d10bc",
                link: "__PF:64dd91fc9b2400f84441",
                _access_token: null,
                name: "Where To Find Those EPA Web Pages Scrubbed By The Trump Administration",
                message_tags: null,
                updated_time: 1511232191,
                caption: "forbes.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PF6Dd1fcB40f44: {
                    target_url: "https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/jeffmcmahon/2017/05/02/where-to-find-epa-web-pages-scrubbed-by-the-trump-administration/&utm_content=63187134&utm_medium=social&utm_source=facebook&refURL=&referrer=",
                    internal_url: "",
                    source_url: "http://bit.ly/2zDLCHH",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:64dd91fc9b2400f84441",
                    type: ""
                },
                __PFB96dd98D5d0bc: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQALN-8_8lTDKeEz&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F622189289%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQDh6Dz_q5AnHJ6m",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQALN-8_8lTDKeEz&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F622189289%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQDh6Dz_q5AnHJ6m",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:b0986dd49084d15d10bc",
                    type: ""
                }
            },
            flagged: false,
            activity_type: "ST"
        },
        {
            last_modification_ts: 1511127344,
            sm_network: "FB",
            creation_ts: 1511118602,
            sm_object_id: "1658331427539028",
            deleted_ts: null,
            changed: [
            ],
            changed_stats: {
            },
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1511118602,
                message: "When An Online Presence is A Key Business Driver #Fortune500 #Business #SocialMedia  __PF:f815b8fe744627cf5d02",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:1440ebd51a3c0907b7d9",
                description: "PageFreezer is proud to have many Fortune 500 companies as clients for our website and social media archiving solution.",
                full_picture: "__PF:1440ebd51a3c0907b7d9",
                link: "__PF:f815b8fe744627cf5d02",
                _access_token: null,
                name: "Enterprise Class Website & Social Media Archiving - How to Archive Website & Social Media",
                message_tags: null,
                updated_time: 1511127344,
                caption: "pagefreezer.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PFF1BFe467cfD2: {
                    target_url: "https://www.pagefreezer.com/fortune-500/?utm_content=63187060&utm_medium=social&utm_source=facebook",
                    internal_url: "",
                    source_url: "http://bit.ly/2zG80QI",
                    downloaded: false,
                    state: -1,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:f815b8fe744627cf5d02",
                    type: ""
                },
                __PF14Ebd1aC97bD: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQCS7z0_CXxP-Ixm&url=https%3A%2F%2Fwww.pagefreezer.com%2Fwp-content%2Fuploads%2Fkey-business-driver.png&_nc_hash=AQAwMhl_wexPYh48",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQCS7z0_CXxP-Ixm&url=https%3A%2F%2Fwww.pagefreezer.com%2Fwp-content%2Fuploads%2Fkey-business-driver.png&_nc_hash=AQAwMhl_wexPYh48",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:1440ebd51a3c0907b7d9",
                    type: ""
                }
            },
            activity_type: "ST"
        },
        {
            last_modification_ts: 1511330402,
            sm_network: "FB",
            creation_ts: 1511052603,
            sm_object_id: "1657604390945065",
            deleted_ts: null,
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1511052603,
                message: "'The Devolution Will Be Televised' -  Keeping #history Safe __PF:ad3fa7d40fd84d64c511",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:4ff13105958ed27ec99b",
                description: "Preserving the public record on television is becoming an ever-more-urgent task and critical challenge for the country and the world.",
                full_picture: "__PF:1a70967790fecdc60c50",
                link: "__PF:ad3fa7d40fd84d64c511",
                _access_token: null,
                name: "The Devolution Will Be Televised",
                message_tags: null,
                updated_time: 1511330402,
                caption: "thenation.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
                51342: [
                    "misc"
                ]
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PFAdFaD0fd4d4c1: {
                    target_url: "https://www.thenation.com/article/the-devolution-will-be-televised/?utm_content=63187028&utm_medium=social&utm_source=facebook",
                    internal_url: "",
                    source_url: "http://bit.ly/2zEI7AF",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:ad3fa7d40fd84d64c511",
                    type: ""
                },
                __PF1a0670fecdc0c0: {
                    target_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/23794287_23842700742570060_314265291079024640_n.jpg?oh=d04a0333b83b6cc85be5ba9910603cd4&oe=5A9EB324",
                    internal_url: "",
                    source_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/23794287_23842700742570060_314265291079024640_n.jpg?oh=d04a0333b83b6cc85be5ba9910603cd4&oe=5A9EB324",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:1a70967790fecdc60c50",
                    type: ""
                },
                __PF4ff3098ed7ec9b: {
                    target_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/c38.0.130.130/p130x130/23794287_23842700742570060_314265291079024640_n.jpg?oh=b44c850fed4c52c4e0b60f9956d9fa89&oe=5A9C254F",
                    internal_url: "",
                    source_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/c38.0.130.130/p130x130/23794287_23842700742570060_314265291079024640_n.jpg?oh=b44c850fed4c52c4e0b60f9956d9fa89&oe=5A9C254F",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:4ff13105958ed27ec99b",
                    type: ""
                }
            },
            flagged: false,
            activity_type: "ST"
        },
        {
            last_modification_ts: 1510955701,
            sm_network: "FB",
            creation_ts: 1510945527,
            sm_object_id: "1656439654394872",
            deleted_ts: null,
            changed: [
            ]
            ,changed_stats: {
            },
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1510945527,
                message: "Why Are Libraries Failing At Web #Archiving And Are We Losing Our Digital #History? 😵__PF:10d2aea51c1783239a02",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:27b5becaa60f5d52d178",
                description: "Have libraries become irrelevant in the web archiving world and how can they learn from their technological neighbors who have the same needs?",
                full_picture: "__PF:27b5becaa60f5d52d178",
                link: "__PF:10d2aea51c1783239a02",
                _access_token: null,
                name: "Why Are Libraries Failing At Web Archiving And Are We Losing Our Digital History?",
                message_tags: null,
                updated_time: 1510955701,
                caption: "forbes.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PF1DAea1c733A2: {
                    target_url: "https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/kalevleetaru/2017/03/27/why-are-libraries-failing-at-web-archiving-and-are-we-losing-our-digital-history/&utm_content=63186958&utm_medium=social&utm_source=facebook&refURL=&referrer=",
                    internal_url: "",
                    source_url: "http://bit.ly/2A2smEo",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:10d2aea51c1783239a02",
                    type: ""
                },
                __PF2BBecaa0fD2d7: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQBjgj1ynRIXjuQA&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F589089299%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQCyOSEXob5pq3iI",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQBjgj1ynRIXjuQA&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F589089299%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQCyOSEXob5pq3iI",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:27b5becaa60f5d52d178",
                    type: ""
                }
            },
            flagged: false,
            activity_type: "ST"
        }
    ],
          [
        {
            last_modification_ts: 1511330402,
            creation_ts: 1511311742,
            deleted_ts: null,
            etc: {
                reactions: {
                    LIKE: {
                        count: 1,
                        users: [
                            [
                                "820532348061526",
                                "Paul Bell"
                            ]
                        ]
                    }
                },
                author_name: "PageFreezer",
                likes: [
                    [
                        "820532348061526",
                        "Paul Bell"
                    ]
                ],
                created_time: 1511311742,
                message: "EPA open #data under threat by #Trump __PF:fe12548f53efc58030e4",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                type: "link",
                status_type: "shared_story",
                picture: "__PF:303103af71aa4dee9f3b",
                description: "The United States Environmental Protection Agency (EPA) was created in 1970 to protect human health and the environment through creation and enforcement of",
                full_picture: "__PF:303103af71aa4dee9f3b",
                link: "__PF:fe12548f53efc58030e4",
                name: "EPA open data under threat by Trump",
                updated_time: 1511330402,
                caption: "greenprophet.com",
                author_id: "432721040100079"
            },
            changed_history: {
                51342: [
                    "misc"
                ]
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation",
            urls_mapping: {
                __PF330Af1aaDeeFb: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQAY0aRlnjs7cJnP&w=130&h=130&url=https%3A%2F%2Fwww.greenprophet.com%2Fwp-content%2Fuploads%2FTrumpEPAairquality.jpg&cfs=1&_nc_hash=AQAS6lSey8HRo-mg",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQAY0aRlnjs7cJnP&w=130&h=130&url=https%3A%2F%2Fwww.greenprophet.com%2Fwp-content%2Fuploads%2FTrumpEPAairquality.jpg&cfs=1&_nc_hash=AQAS6lSey8HRo-mg",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:303103af71aa4dee9f3b",
                    type: ""
                },
                __PFFe24F3efc83E: {
                    target_url: "https://www.greenprophet.com/2017/03/epa-open-data-under-threat-by-trump/?utm_content=63196929&utm_medium=social&utm_source=facebook",
                    internal_url: "",
                    source_url: "http://bit.ly/2A0wK6O",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:fe12548f53efc58030e4",
                    type: ""
                }
            },
            activity_type: "ST"
        },
        {
            last_modification_ts: 1511232191,
            sm_network: "FB",
            creation_ts: 1511215367,
            sm_object_id: "1659394080766096",
            deleted_ts: null,
            changed: [
            ],
            changed_stats: {
            },
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1511215367,
                message: "Where To Find Those EPA Web Pages Scrubbed By The #Trump Administration 😇  👉__PF:64dd91fc9b2400f84441",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:b0986dd49084d15d10bc",
                description: "The Environmental Protection Agency no longer features climate-change information on its main website, but the scrubbed pages are available from several sources..",
                full_picture: "__PF:b0986dd49084d15d10bc",
                link: "__PF:64dd91fc9b2400f84441",
                _access_token: null,
                name: "Where To Find Those EPA Web Pages Scrubbed By The Trump Administration",
                message_tags: null,
                updated_time: 1511232191,
                caption: "forbes.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PF6Dd1fcB40f44: {
                    target_url: "https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/jeffmcmahon/2017/05/02/where-to-find-epa-web-pages-scrubbed-by-the-trump-administration/&utm_content=63187134&utm_medium=social&utm_source=facebook&refURL=&referrer=",
                    internal_url: "",
                    source_url: "http://bit.ly/2zDLCHH",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:64dd91fc9b2400f84441",
                    type: ""
                },
                __PFB96dd98D5d0bc: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQALN-8_8lTDKeEz&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F622189289%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQDh6Dz_q5AnHJ6m",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQALN-8_8lTDKeEz&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F622189289%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQDh6Dz_q5AnHJ6m",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:b0986dd49084d15d10bc",
                    type: ""
                }
            },
            flagged: false,
            activity_type: "ST"
        },
        {
            last_modification_ts: 1511127344,
            sm_network: "FB",
            creation_ts: 1511118602,
            sm_object_id: "1658331427539028",
            deleted_ts: null,
            changed: [
            ],
            changed_stats: {
            },
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1511118602,
                message: "When An Online Presence is A Key Business Driver #Fortune500 #Business #SocialMedia  __PF:f815b8fe744627cf5d02",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:1440ebd51a3c0907b7d9",
                description: "PageFreezer is proud to have many Fortune 500 companies as clients for our website and social media archiving solution.",
                full_picture: "__PF:1440ebd51a3c0907b7d9",
                link: "__PF:f815b8fe744627cf5d02",
                _access_token: null,
                name: "Enterprise Class Website & Social Media Archiving - How to Archive Website & Social Media",
                message_tags: null,
                updated_time: 1511127344,
                caption: "pagefreezer.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PFF1BFe467cfD2: {
                    target_url: "https://www.pagefreezer.com/fortune-500/?utm_content=63187060&utm_medium=social&utm_source=facebook",
                    internal_url: "",
                    source_url: "http://bit.ly/2zG80QI",
                    downloaded: false,
                    state: -1,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:f815b8fe744627cf5d02",
                    type: ""
                },
                __PF14Ebd1aC97bD: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQCS7z0_CXxP-Ixm&url=https%3A%2F%2Fwww.pagefreezer.com%2Fwp-content%2Fuploads%2Fkey-business-driver.png&_nc_hash=AQAwMhl_wexPYh48",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQCS7z0_CXxP-Ixm&url=https%3A%2F%2Fwww.pagefreezer.com%2Fwp-content%2Fuploads%2Fkey-business-driver.png&_nc_hash=AQAwMhl_wexPYh48",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:1440ebd51a3c0907b7d9",
                    type: ""
                }
            },
            activity_type: "ST"
        },
        {
            last_modification_ts: 1511330402,
            sm_network: "FB",
            creation_ts: 1511052603,
            sm_object_id: "1657604390945065",
            deleted_ts: null,
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1511052603,
                message: "'The Devolution Will Be Televised' -  Keeping #history Safe __PF:ad3fa7d40fd84d64c511",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:4ff13105958ed27ec99b",
                description: "Preserving the public record on television is becoming an ever-more-urgent task and critical challenge for the country and the world.",
                full_picture: "__PF:1a70967790fecdc60c50",
                link: "__PF:ad3fa7d40fd84d64c511",
                _access_token: null,
                name: "The Devolution Will Be Televised",
                message_tags: null,
                updated_time: 1511330402,
                caption: "thenation.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
                51342: [
                    "misc"
                ]
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PFAdFaD0fd4d4c1: {
                    target_url: "https://www.thenation.com/article/the-devolution-will-be-televised/?utm_content=63187028&utm_medium=social&utm_source=facebook",
                    internal_url: "",
                    source_url: "http://bit.ly/2zEI7AF",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:ad3fa7d40fd84d64c511",
                    type: ""
                },
                __PF1a0670fecdc0c0: {
                    target_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/23794287_23842700742570060_314265291079024640_n.jpg?oh=d04a0333b83b6cc85be5ba9910603cd4&oe=5A9EB324",
                    internal_url: "",
                    source_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/23794287_23842700742570060_314265291079024640_n.jpg?oh=d04a0333b83b6cc85be5ba9910603cd4&oe=5A9EB324",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:1a70967790fecdc60c50",
                    type: ""
                },
                __PF4ff3098ed7ec9b: {
                    target_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/c38.0.130.130/p130x130/23794287_23842700742570060_314265291079024640_n.jpg?oh=b44c850fed4c52c4e0b60f9956d9fa89&oe=5A9C254F",
                    internal_url: "",
                    source_url: "https://scontent.xx.fbcdn.net/v/t45.1600-4/c38.0.130.130/p130x130/23794287_23842700742570060_314265291079024640_n.jpg?oh=b44c850fed4c52c4e0b60f9956d9fa89&oe=5A9C254F",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:4ff13105958ed27ec99b",
                    type: ""
                }
            },
            flagged: false,
            activity_type: "ST"
        },
        {
            last_modification_ts: 1510955701,
            sm_network: "FB",
            creation_ts: 1510945527,
            sm_object_id: "1656439654394872",
            deleted_ts: null,
            changed: [
            ]
            ,changed_stats: {
            },
            etc: {
                author_name: "PageFreezer",
                likes: [
                ],
                created_time: 1510945527,
                message: "Why Are Libraries Failing At Web #Archiving And Are We Losing Our Digital #History? 😵__PF:10d2aea51c1783239a02",
                story: null,
                from: {
                    picture: {
                        data: {
                            url: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12795552_1104941502878026_2211372332743011468_n.png?oh=ac5bf87ff149cdf56a60a0b510648e53&oe=5A9CF830",
                            width: 50,
                            height: 50
                        }
                    },
                    cover: {
                        source: "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/22366488_1624902320881939_2205380514175623995_n.png?oh=a1dd34d112f7aa0e00c61bceed4ed70a&oe=5A9048A2",
                        cover_id: "1624902320881939",
                        offset_x: 0,
                        offset_y: 11
                    },
                    name: "PageFreezer"
                },
                privacy: {
                    value: "EVERYONE",
                    deny: "",
                    friends: "",
                    description: "Public",
                    allow: ""
                },
                story_tags: null,
                type: "link",
                status_type: "shared_story",
                picture: "__PF:27b5becaa60f5d52d178",
                description: "Have libraries become irrelevant in the web archiving world and how can they learn from their technological neighbors who have the same needs?",
                full_picture: "__PF:27b5becaa60f5d52d178",
                link: "__PF:10d2aea51c1783239a02",
                _access_token: null,
                name: "Why Are Libraries Failing At Web Archiving And Are We Losing Our Digital History?",
                message_tags: null,
                updated_time: 1510955701,
                caption: "forbes.com",
                _company: null,
                author_id: "432721040100079"
            },
            changed_history: {
            },
            signature: "Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
            urls_mapping: {
                __PF1DAea1c733A2: {
                    target_url: "https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/kalevleetaru/2017/03/27/why-are-libraries-failing-at-web-archiving-and-are-we-losing-our-digital-history/&utm_content=63186958&utm_medium=social&utm_source=facebook&refURL=&referrer=",
                    internal_url: "",
                    source_url: "http://bit.ly/2A2smEo",
                    downloaded: false,
                    state: -3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:10d2aea51c1783239a02",
                    type: ""
                },
                __PF2BBecaa0fD2d7: {
                    target_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQBjgj1ynRIXjuQA&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F589089299%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQCyOSEXob5pq3iI",
                    internal_url: "",
                    source_url: "https://external.xx.fbcdn.net/safe_image.php?d=AQBjgj1ynRIXjuQA&url=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2F600x315%2Fsmart%2Fhttps%253A%252F%252Fspecials-images.forbesimg.com%252Fimageserve%252F589089299%252F960x0.jpg%253Ffit%253Dscale&_nc_hash=AQCyOSEXob5pq3iI",
                    downloaded: true,
                    state: 3,
                    location: "cdn1",
                    path: "accounts_res/I_sm_social/P_9zSLdhy7jsYHujEcC9XjS/FB/AFBpg_19S178GKt9_OoWMhbsQvIN/__PF:27b5becaa60f5d52d178",
                    type: ""
                }
            },
            flagged: false,
            activity_type: "ST"
        }
    ],
    ]

    Posts.getPosts = function() {
       // Returning the array of users. Eventually this will be an API call.
       
      return thePosts;

    };

    return Posts;

  });
})();