const fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

function streetFighterSelection(fighters, position, moves) {
  const posX = position[0]
  const posY = position[1]
  const indx = 0
  const curr = fighters[indx]
  const ans = []  

  moves.forEach(ele => {
        ele === 'up' ? posY -= 1 : null
        ele === 'down' ? posY += 1 : null
        ele === 'left' ? posX -= 1 : null
        ele === 'right' ? posX += 1 : null

        if ((posX === 5 || posY === 5) && ele === "right") {
          curr = 0
          ans.push(fighters[curr])
        } else if ((posX === 0 || posY === 0) && moves[indx] === "left") {
          curr = 5
          ans.push(fighters[curr])
        }

      })

  }
