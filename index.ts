import * as assignment1 from './modules/assignment1';
import * as assignment2 from './modules/assignment2';
import * as assignment3 from './modules/assignment3';
import * as assignment4 from './modules/assignment4';
import * as assignment5 from './modules/assignment5';
import * as assignment6 from './modules/assignment6';

assignment1.multiply(2, 3, true);

assignment2.getFullName('Honza', 'Kubita');

console.log(`${assignment3.exampleCar.make} ${assignment3.exampleCar.model}`);

assignment4.greet('Honza', 'Hi');

assignment5.printId(42);
assignment5.printId('ajosdnaosdjn');

assignment6.identity<number>(42);
assignment6.identity<string>('ajosdnaosdjn');
assignment6.identity<assignment3.Car>(assignment3.exampleCar);