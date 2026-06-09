Events.on(ClientLoadEvent, e => {
  Blocks.swarmer.ammoTypes.get(Items.blastCompound).hitSound = Sounds.unitExplode1
  Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).hitSound = Sounds.unitExplode1
  Blocks.swarmer.ammoTypes.get(Items.pyratite).hitSound = Sounds.unitExplode1
})
