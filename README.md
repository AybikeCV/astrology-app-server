# Astrology-App-Server

This repository is a [astrology-app-server](https://github.com/AybikeCV/astrology-app-server) created to feed data into the React Application below.

#### [astrology-app-client](https://github.com/AybikeCV/astrology-app-client)

# Server Structure

## Collections

### signs

{
id:,
name:,
dateStart:,
dateEnd:,
duality:,
triplicityId:,
quadruplicity:,
rulingPlanet:,
motto:,
polarity:,
description:,
imgUrl:
}

### triplicities

{
id:,
name:,
description:,
imgUrl:
}

### comments

{
signId:,
text:,
id:
}

## Used API Endpoints in the App

| HTTP Method | URL      | Request Body | Description     |
| ----------- | -------- | ------------ | --------------- |
| GET         | `/signs` |              | Sends all signs |

| GET | `/triplicities` | | Sends all triplicities |

| GET | `/signs/:signId` | | Sends all details of a sign |

| GET | `/games/:triplicityId` | | Sends all details of a triplicity |

GET | `triplicities/:triplicityId?_embed=signs` | | Sends all details of a triplicity and its all signs |

| GET | `/comments` | | Sends all comments |

| GET | `/comments/:commentId` | | Sends all details of a comment |

| POST | `/comments` | {text, signId} | Creates a new comment |

| PATCH | `/comments/:commentId/edit` | {text} | Edits a comment |

| DELETE | `/comments` | | Deletes a comment |

## Links

### Collaborators

[Aybike Celebi Visser](https://github.com/AybikeCV)

### Project

[astrology-app-client](https://github.com/AybikeCV/astrology-app-client)

[astrology-app-server](https://github.com/AybikeCV/astrology-app-server)

[Deploy Link](https://webastro-tan.vercel.app/)

### Excalidraw

[Sketches/BrainStorming/Journaling](https://excalidraw.com/#json=UdngzgGZoVcx4qsdL1Pqh,lu7w9fsEASdt_iv3fzkvvw)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1OuCYt1YBr4kBzWbyZbtl5pTA7JCvBGM1l6GRiTJo7pk/edit?usp=sharing)
