document.addEventListener("DOMContentLoaded", function () {
    loadBlog();
});

function toggleContent(button) {
    const post = button.closest('.blog-post');
    const content = post.querySelector('.post-content');

    if (content) {
        if (content.classList.contains('expanded')) {
            content.classList.remove('expanded');
            button.textContent = "Read Full";
        } else {
            content.classList.add('expanded');
            button.textContent = "Read Less";
        }
    }
}

const BLOG_POSTS = [
    {
        date: "1969",
        title: "My prophet was born today",
        image: null,
        text: "Hey guys! Welcome to my blog. It's me, God... I don't usually do stuff like this, but something special happened today.\nA kid was born... and not just any kid, but one born with religion! I'll be watching over her as my Prophet, from now on. Let’s see how she grows and matures. For now, though, we can enjoy how innocent she is, because it isn’t going to last long."
    },
    {
        date: "1975",
        title: "Puts prophet aside for the revolution",
        image: null,
        text: "My Prophet is embracing prophethood very well. She’s begun to form her own perception of reality, and she recognizes how unequal the world is. She knows that her family is well off, that they drive a Cadillac and that they have a maid, and that her grandmother is often in pain. I’m proud of her... this is the first step in her development, and she’s already showing remarkable maturity in wanting things to be just and fair, for everyone. I really hope she doesn’t become communist..."
    },
    {
        date: "1979",
        title: "Gains prophetic ideals",
        image: null,
        text: "My Prophet is very revolutionary because of the actions of her parents. She does not really understand what exactly she is being revolutionary about just yet, though.  I do however think it is a valiant effort to fight for her people is a good sign, I think she just  needs to work on understanding what she wants to work towards."
    },
    {
        date: "1979",
        title: "Prophet is susceptible to what people tell her",
        image: null,
        text: "My Prophet thinks that I chose the Shah, because it was written in her textbook. It’s unfortunate that she thinks this, it's all propaganda... regardless of whether it’s true or not, my Prophet is very impressionable to the things she reads and hears, believing much of it without question. First it was her revolutionary sentiment that she got from her parents, and now it’s the Imperial propaganda she’s being taught from her school. Still, I do think there’s hope for her to get out of this habit... she’s formed her own morals, and she just needs to keep growing her view of the world until it’s entirely her own."
    },
    {
        date: "1979",
        title: "Iranians massacred Iranians and the Shah blame Israelis",
        image: null,
        text: "Today my Prophet and her family maid went out to protest, and they're lucky they didn't get hurt. The Shah sent his special police to shut down the protests, and lots of people died. Her and the maid were punished back at home with a firm slap to the face, courtesy of her mother. They could have died like so many others today. The Shah has proven that he is no longer a fit ruler due to multiple things but he also blamed Israel for today's massacre even though it was his own men..."
    },
    {
        date: "1979",
        title: "Shah is gone",
        image: null,
        text: "The Shah got spooked and left Iran. While my Prophet and her family rejoice, there’s an enormous power vacuum in the country. The people shouldn’t be celebrating so quickly, it’s now down to the new regime to prove whether it will be a good one or not... as bad as the Shah might have been, it can always get worse. I do hope that my Prophet will keep her eyes open towards any hypocrisy she might face under this new government."
    },
    {
        date: "1979",
        title: "Prophet becomes mediocre person",
        image: null,
        text: "Today my Prophet learned something that I truly stand for, forgiveness. She was going to beat up one of her schoolmates just because of what his father did. Her mom stopped her though and explained how that is wrong. I don’t know how this was not something my prophet understood until now but I am proud that she has improved herself. She also went and forgave Ramin even though he said it was okay that his dad killed all those people since they were communists. While she still has a lot to learn, this is an important lesson for her... I will be watching to see how my Prophet grows in her faith."
    },
    {
        date: "1979",
        title: "Meet Uncle Anoosh, the Prophet's honorable prisoner relative (who is also COMMUNIST)",
        image: null,
        text: "My Prophet was distraught, thinking that a lack of heroes in her family made her somehow less than her friends who were unfortunate enough to suffer great loss, however honorable their deaths might have been. You can imagine her joy today when she learned about her Uncle Anoosh, who was a political prisoner... Now she has what she perceives as a proper “hero” in her family. Alas, she still doesn’t understand... She admires a good story, and thinks that being tortured and jailed is something to be proud of. I have a sickening feeling about this one... Anoosh seems like a nice enough figure, but he’s still in hot water with the government. When something bad happens to him, it’s going to turn my Prophet’s world upside down. We’re going to have to see what happens."
    },
    {
        date: "1979",
        title: "Uncle Anoosh dies, I GOT EXILED!!!",
        image: null,
        text: "My Prophet just experienced her first devastating loss... the communist uncle died today, put to death by the government. This has truly opened the ground underneath my Prophet as the first time she experienced the loss of someone so close to her... and as strong as her grief is, I think she finally understands that having a “hero” in your family isn’t the most important thing as just keeping one’s loved ones safe...\nShe was extremely distraught. She ordered me to get out of her life, and I obliged. Though I will be unable to continue offering guidance and support directly, I plan to continue watching over for her from afar. She’s on an uncertain path, but I’m confident she’ll make it through."
    },
    {
        date: "1980",
        title: "The veil is now mandatory, Prophet seeing violence with her own eyes",
        image: null,
        text: "It’s gotten pretty bad in Iran... with political violence continuing between the protesters and the Islamic fundamentalist, she’s become a more hardened individual, with less and less childhood innocence. She went to a protest with her family’s maid, and the maid was slapped. She’s never seen violence like that before..."
    },
    {
        date: "1980",
        title: "Bombs are dropping, patriot Prophet learns about misinformation",
        image: null,
        text: "Iraq attacked Iran today and my Prophet seemed very patriotic and proud of her country and of her people, she came to tears while hearing the people's anthem. When she heard about the counter attack against Iraq 140 planes out to bomb Baghdad, unfortunately for most it will be a one way trip.  My Prophet’s dad wisely chose to listen to more than once source of information rather than just listening to the state media. The BBC talked about the Iranian counter attack and for a moment they seemed happy, then they learned about the loss of life.  One of my Prophet’s friends lost their father in the attack. I hope she will be okay."
    },
    {
        date: "1983",
        title: "Family's forbidden house parties",
        image: null,
        text: "Wow. My Prophet is embracing her family’s resistance against the new regime that’s restricting their freedoms. They’re having house parties with moonshining and booze. I am glad that even during this terrible war, my Prophet is able to find some semblance of joy, but I only fear that life will continue to become more and more uncertain for her."
    },
    {
        date: "1984",
        title: "Prophet's near death experience...",
        image: null,
        text: "My Prophet had another scare today. Her neighborhood was bombed and she panicked, rushing back home. Fortunately, her family and her house were okay, but some people she knew weren’t so lucky. She spotted her first corpse today, under a large pile of rubble with the hand sticking out. While she’s experienced loss before, this is the first time she’s personally witnessed death in the form of a corpse... and it had a profound impact on her."
    },
    {
        date: "1984",
        title: "Rebel Prophet strikes back",
        image: null,
        text: "My Prophet has come into her own. She’s a true rebel now, pointing out hypocrisy in the teachings of the Islamic Republic and talking back to her teachers. While her courage is admirable, she’s started to get herself into hot water. Her parents are worried... even if they agree with her sentiments, they’re worried for her safety. Her mother had to explain to her how dangerous it could be if she got arrested, especially as a woman under the Islamic regime."
    },
    {
        date: "1984",
        title: "The Prophet is leaving for Europe",
        image: null,
        text: "Well... my Prophet is leaving her home behind. I suppose her parents became too concerned and opted to send her overseas to Europe, where her proficiency in French will allow her to continue her studies. Her childhood in Iran has been shaped by the views of her parents, the loss of her uncle and other people she was close to, and most profoundly the Islamic Republican regime that took over and began restricting people’s liberties to fulfill their theocratic ideals. My Prophet is a strong one... while initially malleable to outside influences, she gradually transformed into her own person, protesting and striking back where she could while forging a close bond with those around her. Now her journey is taking her away from home, though I will continue to watch over her. This is a new experience for her, but I’m confident that she’ll be able to meet it head on, like she always has been able to."
    }
];

function loadBlog() {
    const blogDiv = document.querySelector(".blog-container");
    blogDiv.innerHTML = "";

    let newHtml = "";

    for (let i = 0; i < BLOG_POSTS.length; i++) {
        const POST_DATA = BLOG_POSTS[i];

        newHtml += `<article class="blog-post">
            <h2>${POST_DATA.title}</h2>
            <p class="date">${POST_DATA.date}</p>
            ${!POST_DATA.image ? "" : `<img src="${POST_DATA.image}" height="200px" alt="Description of image"
                class="centered post-image">`}
                <div class="post-content">
                    ${"<p>" + POST_DATA.text.replaceAll("\n", "</p><p>") + "</p>"}
                    <div class="full-content">

                    </div>
                </div>
                <a href="javascript:void(0);" class="centered read-more" onclick="toggleContent(this)">Read Full</a>
        </article>`
    }

    blogDiv.innerHTML = newHtml;
}