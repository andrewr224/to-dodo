import generator from './generator';
import List      from './list';

let flash = List.new({'title': 'FlashMap'});
flash.addToDo({'title': 'Get AWS credentials', 'description': '', 'dueDate': '18:04:16', 'star': true});
flash.addToDo({'title': 'Deploy to AWS', 'description': 'Deploy FlashMap to AWS', 'star': true});

generator.addList(flash);
generator.showList(flash);
