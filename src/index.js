export default class Team {
  constructor() {
      this.members = new Set();
  }
  

  add(charecter) {
      if(this.members.has(charecter)) {
          throw new Error ('Персонаж уже есть в команде')
      } else {
          this.members.add(charecter);
      }
  }

  addAll(...charecters) {
      charecters.forEach(charecter => {
          if (!this.members.has(charecter)) {
              this.members.add(charecter)
          }
      });
  }

  toArray() {
      return Array.from(this.members)
  }
}