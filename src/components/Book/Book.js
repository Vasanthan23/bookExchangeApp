import { useState } from 'react';
import useStyles from './styles';
import { Grid } from '@material-ui/core';
import Product from '../Products/Product/Product';

const Book = () => {

    const classes = useStyles();
    const [bookList,setBookList] = useState([
        {
            "id": "prod_kd6Ll2eLj5V2mj",
            "name": "The Jungle Book",
            "description": "<p>by\u00a0Rudyard Kipling\u00a0<em>\u00a0(Author)<\/em><\/p><p><strong>In\u00a0The Jungle Book<\/strong>, a young boy named Mowgli becomes a member of the Seeonee Wolf Pack. A cruel tiger named Shere Khan plots against Mowgli and the leader of his pack, Akela. When Mowgli grows up, he realizes that he must rejoin the ranks of men.<\/p><p>Mowgli strays from his village one day. After being attacked by Shere Khan, he's saved by Father Wolf, who asks Akela, the leader of the wolves, to accept Mowgli as a member of the pack.<\/p><p><\/p><p>Mowgli briefly returns to the world of men, but leaves after he learns that Shere Khan has been plotting against Akela. He defeats the tiger, but knows that someday he will rejoin the man-pack.<\/p><p>A python named Kaa takes Mowgli down to the Cold Lairs, where he steals an ankus. He discards the ankus, fearing its deadly curse. This results in the death of six men. After this incident, Mowgli becomes unhappy and gradually drifts toward the world of men.<\/p>",
            "price": {
                "raw": 99,
                "formatted": "99.00",
                "formatted_with_symbol": "\u20b999.00",
                "formatted_with_code": "99.00 INR"
            },
            "media": {
                "type": "image",
                "source": "https:\/\/cdn.chec.io\/merchants\/28663\/assets\/cvLwYNXyje5f45bW|2.jpg",
                "asset_id": "ast_VPvL5z3n49lAQk"
            }
        },
        {
            "id": "prod_kpnNwAEpawmXB3",
            "name": "The Sherlock Holmes",
            "description": "<p>by\u00a0Arthur Conan Doyle\u00a0<em>\u00a0(Author)<\/em><\/p><p><strong>The Adventures of Sherlock Holmes<\/strong>\u00a0is a collection of twelve short stories by\u00a0Arthur Conan Doyle, first published on 14 October 1892. It contains the earliest short stories featuring the consulting detective\u00a0Sherlock Holmes, which had been published in twelve monthly issues of\u00a0<em>The Strand Magazine<\/em>\u00a0from July 1891 to June 1892. The stories are collected in the same sequence, which is not supported by any fictional chronology. The only characters common to all twelve are Holmes and\u00a0Dr. Watson\u00a0and all are related in\u00a0first-person narrative\u00a0from Watson's point of view.<\/p><p>In general the stories in\u00a0<em>The Adventures of Sherlock Holmes<\/em>\u00a0identify, and try to correct, social injustices. Holmes is portrayed as offering a new, fairer sense of justice. The stories were well received, and boosted the subscriptions figures of\u00a0<em>The Strand Magazine<\/em>, prompting Doyle to be able to demand more money for his next set of stories. The first story, \"A Scandal in Bohemia\", includes the character of\u00a0Irene Adler, who, despite being featured only within this one story by Doyle, is a prominent character in modern Sherlock Holmes adaptations, generally as a love interest for Holmes. Doyle included four of the twelve stories from this collection in his twelve favourite Sherlock Holmes stories, picking \"The Adventure of the Speckled Band\" as his overall favourite.<\/p>",
            "price": {
                "raw": 136,
                "formatted": "136.00",
                "formatted_with_symbol": "\u20b9136.00",
                "formatted_with_code": "136.00 INR"
            },
            "media": {
                "type": "image",
                "source": "https:\/\/cdn.chec.io\/merchants\/28663\/assets\/L2Cj334oBGjdbHmK|1.jpg",
                "asset_id": "ast_DWy4oG4vOM56Jx"
            }
        },
        {
            "id": "prod_bO6J5aMkL85Ejp",
            "name": "A Passage To India",
            "description": "<p>by E. M. Forster (Author)<\/p><p>\u201cWe may hate one another, but we hate you most... Yes, we shall drive every blasted Englishman into the sea.\u201d on that fateful day, when Dr. Aziz took Mrs. Moore and Miss adela quest to the famous marabar caves, he had no idea that his whole life was about to turn upside down. All Aziz had done was kindly offer to show the \u2018real\u2019 India to the two englishwomen who had newly arrived in his country. But on the day of the excursion, upon returning from the caves, he was slapped with the accusation of a sexual assault. What happens when Aziz is brought to Court? Does the man get justice? Or has his race earmarked him for prison? Set in the fictional town of Chandernagore, in the pre-Independence era of India, a passage to India portrays colonialism, racial prejudice, and the dynamics of Anglo-Indian relations with striking realism. Considered forster\u2019s most successful novel, it was adapted into a film in 1984, and was featured in time magazine list of hundred best English-language novels from 1923 to 2005.<\/p>",
            "price": {
                "raw": 189,
                "formatted": "189.00",
                "formatted_with_symbol": "\u20b9189.00",
                "formatted_with_code": "189.00 INR"
            },
            "media": {
                "type": "image",
                "source": "https:\/\/cdn.chec.io\/merchants\/28663\/assets\/SgZD7wLYNIwK97u8|71K-InZRoUL.jpg",
                "asset_id": "ast_O3bR5XPVDQ5nzd"
            }
        },
        {
            "id": "prod_Op1YoVDKZDlXLv",
            "name": "Ghosts of The Silent Hills",
            "description": "<p>by Anita Krishan (Author)<\/p><p>The dead do not rest till they get what they want. You have arrived in the hills. In here, you are surrounded by dense, menacing forests, enveloped in a deadly silence... You never know what lurks here in the Cold, dark night. Do not walk alone after sunset in the hills. A beautiful woman in white haunts the Lonely pathways, looking to enchant and ensnare men... All the people who died in accidents here... They say you hear their screams at night. And the deserted lodges sitting amidst lush greenery and calm streams... Spirits lie in wait here, ready to prey on the living. There are sceptics who did not heed these warnings. They tried to rationalize what they saw, what they felt. But when they came face to face with the beings that they believed didn\u2019t exist, they couldn\u2019t run away anymore... Ghosts of the silent hills is a collection that will make your nights a little scarier, encompassing the very best spine-chilling stories based on true hauntings.<\/p>",
            "price": {
                "raw": 159,
                "formatted": "159.00",
                "formatted_with_symbol": "\u20b9159.00",
                "formatted_with_code": "159.00 INR"
            },
            "inventory": {
                "managed": false,
                "available": 0
            },
            "media": {
                "type": "image",
                "source": "https:\/\/cdn.chec.io\/merchants\/28663\/assets\/rpXLx3xlXM1iWs5h|71NUqTiGrOL.jpg",
                "asset_id": "ast_RyWOwm7zGx5nEa"
            }
        },
        {
            "id": "prod_QG375vM6nYorMO",
            "name": "Treasure Island",
            "description": "<p>by Robert Louis Stevenson (Author)<\/p><p>Think of the high seas and of a buccaneer ship; of a wild seaman with a sea chest full of gold; of Long John Silver; of a buried treasure and of young Jim Hawkins, the boy with the treasure map the key to it all. This is the Treasure Island and if you don't think of all this, the pirates will hunt you down and when they find you, for find you they sure will, they will trust you and carry you back to their ship and just before they feed you to the sharks, as you walk the gangplank with a sword digging sharp and sure into your back, they will sing their one last song for you. \u201cFifteen men on the dead man's chest Yo-ho-ho and a bottle of rum!\u201d<\/p>",
            "price": {
                "raw": 169,
                "formatted": "169.00",
                "formatted_with_symbol": "\u20b9169.00",
                "formatted_with_code": "169.00 INR"
            },
            "media": {
                "type": "image",
                "source": "https:\/\/cdn.chec.io\/merchants\/28663\/assets\/cqpteRf6VzYXJeLC|71+f+GXLk4L.jpg",
                "asset_id": "ast_Kvg9l69W8y51bB"
            }
        }
    ]);

    const onAddToCart = () => {
        console.log("Added to cart");
    }

    return (
        <>
          <main className={classes.mainPage}>
            <div className={classes.toolbar} />
    
            <>
              <div className={classes.categorySection}>
                <h3 className={classes.categoryHeader}>
                   <span style={{ color: "#f1361d" }}>Books</span>
                </h3>
                <h3 className={classes.categoryDesc}>
                  Browse our handpicked selection of books
                </h3>
                <Grid
                  className={classes.categoryFeatured}
                  container
                  justify="center"
                  spacing={1}
                >
                    {bookList.map((product) => (
                <Grid
                  className={classes.categoryFeatured}
                  item
                  xs={6}
                  sm={5}
                  md={3}
                  lg={2}
                  id="pro"
                >
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
                </Grid>
              </div>
            </>
          </main>
        </>
      );

}
export default Book;