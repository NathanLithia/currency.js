onEvent('item.registry', event => {
  event.create('ten_note').displayName('$10 Note')
  event.create('twenty_note').displayName('$20 Note')
  event.create('fifty_note').displayName('$50 Note')
  event.create('hundred_note').displayName('$100 Note')
})