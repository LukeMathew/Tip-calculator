
 document.body.style.backgroundImage="url('https://steamuserimages-a.akamaihd.net/ugc/868489934988939865/834D5AD4F757440528E787627FB9063DE163E194/')"
//Math stuff's
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;
  //Some memes
   if (billAmt === "steve"){
    alert("Steve lives on a wheat farm. He has everything he needs to live in the Minecraft world: a bed, a house, and food. Steve likes to spend his mornings in the NCP village and trade his wheat for emeralds, armor, books, swords, and food. One morning, he finds that Zombies have attacked the villagers. The Zombies have also turned the village blacksmith into a Zombie, leaving Steve without a place to get swords. To protect himself and the few villagers that remain, Steve goes on a quest to mine for forty diamonds, which are the most powerful mineral in the Overworld. He wants to craft these diamonds into a diamond sword to shield him and the villagers from the Zombies.Far from his home, with night about to set in, Steve fears for his life. Nighttime is when users are most vulnerable in Minecraft. As he looks for shelter in a temple, he meets a trio of treasure hunters, Max, Lucy, and Henry, who are trying to unearth the treasure under the temple. Steve tells them of his master plan to mine for the most powerful mineral in the Overworld—the diamond. The treasure hunters are eager to join him. Facing treacherous mining conditions, a thunderstorm, and attacks from hostile mobs, these four friends question if it’s better to be a single player than a multiplayer, as they try to watch out for each other and chase Steve’s dream at the same time.Will Steve find the diamonds? Will his friends help or hinder the search? Should he trust his new treasure hunter friends? And will Steve get back in time to save the villagers?Sky Pony Press, with our Good Books, Racehorse and Arcade imprints, is proud to publish a broad range of books for young readers—picture books for small children, chapter books, books for middle grade readers, and novels for young adults. Our list includes bestsellers for children who love to play Minecraft; stories told with LEGO bricks; books that teach lessons about tolerance, patience, and the environment, and much more. While not every title we publish becomes a New York Times bestseller or a national bestseller, we are committed to books on subjects that are sometimes overlooked and to authors whose work might not otherwise find a home.");
    return;
  }
  if (billAmt === "uwu") {
    alert("Okay, I know this is a really bad idea but I'm already here so here we fuckin go,rawr x3 nuzzles, pounces on you, uwu you so warm (Ooh) couldn't help but notice your bulge from across the floor nuzzles your necky wecky-tilde murr-tilde, hehe unzips your baggy ass pants, oof baby you so musky.Take me home, pet me, and make me yours and don't forget to stuff me.see me wag my widdle baby tail all for your buldgy-wuldgy. Kissies and lickies your neck.I hope daddy likies. Nuzzles and wuzzles your chest (Yuh).I be (Yeah) gettin thirsty.Hey, I got a little itch, you think you can help me?. Only seven inches long, uwu, please adopt me. Paws on your buldge as I lick my lips (UwU, punish me please).'Bout to hit 'em with this furry shit (He don't see it comin')");
    document.body.style.backgroundImage="url('https://thumbs.gfycat.com/YearlyImpressiveIndianpalmsquirrel-size_restricted.gif')";
    return;
  }
  if (billAmt === "sun"){
    document.body.style.backgroundImage="url('https://i.ytimg.com/vi/O0_9ZpcGkJc/maxresdefault.jpg')";
    return;
  }
  if (billAmt === "pencil"){
    alert("(Background) One of the oldest and most widely used writing utensils, the pencil originated in pre-historic times when chalky rocks and charred sticks were used to draw on surfaces as varied as animal hides and cave walls. The Greeks and Romans used flat pieces of lead to draw faint lines on papyrus, but it was not until the late 1400s that the earliest direct ancestor of today's pencil was developed. About one hundred years later graphite, a common mineral occurring as soft, lustrous veins in rocks, was discovered near Borrowdale in northwestern England. The Borrowdale mine supplied Europe with graphite for several hundred years; however, because people could not then differentiate between graphite and lead, they referred to the former as black lead. Cut into rods or strips, graphite was heavily wrapped in twine to provide strength and a comfortable handle. The finished product, called a lead pencil, was quite popular. In the late sixteenth century, a method for gluing strips of wood around graphite was discovered in Germany, and the modern pencil began to take form. In 1779, scientists determined that the material they had previously thought was lead was actually a form of microcrystalline carbon that they named graphite (from the Greek 'graphein' meaning 'to write'). Graphite is one of the three natural forms of pure carbon—the others are coal and diamond.)");
    return;
  }

  //make sure imput makes sense(check)
  if (billAmt === "" || serviceQual == 0) {
    alert("You forgot something");
    return;
  }
  //checks if imput of people is greater than zero(check)
  if (numOfPeople === "" || numOfPeople < 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //calculate tip(variable)
  var total = (billAmt * serviceQual) / numOfPeople;
  //round to two decimal places(display/variable)
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point(display)
  total = total.toFixed(2);
  //display the tip(display)
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load(dont remember why the tutorial had me write this)
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to calculate(display)
document.getElementById("calculate").onclick = function() {
  calculateTip();

};