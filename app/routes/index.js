import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
      title: 'Shortboard',
      program: 'Hollow',
      height: '1,5',
      length: '6',
      volume: '28',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Riley-fish-Marlin2.jpg',
      description: 'Short and narrow shortboard. Ideal for powerful waves, with hollow sections up to 2 meters.',
    };
  }
}