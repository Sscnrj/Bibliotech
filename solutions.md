# SOLUTIONS.md

## TODO 1 : Navigation sans rechargement
J'ai remplacé les `<a href="...">` par des `<a routerLink="...">` dans les templates pour que la navigation passe par le routeur Angular et ne recharge pas la page.

## TODO 2 : Pipe de formatage de titre
J'ai créé un pipe `formatTitre` qui met le premier mot en majuscule, le reste en minuscule, et remplace les underscores par des espaces. Il est utilisé pour afficher proprement le `title` dans le header.

## TODO 3 : Liens dans la navbar
J'ai corrigé les liens de la navbar pour qu'ils utilisent `routerLink` au lieu de `href`, comme dans le TODO 1.

## TODO 4 : Affichage des pages
Le `<router-outlet>` était déjà présent. J'ai confirmé qu'il fonctionne bien avec les routes existantes.

## TODO 5 : Route vers la page de détail
La route `/books/:id` était déjà définie. Je l'ai vérifiée et elle fonctionne avec le composant `BookDetailComponent`.

## TODO 6 : Création du formulaire
J'ai initialisé un `FormGroup` avec les champs `title`, `author`, `description`, et `category` dans le composant d'ajout de livre.

## TODO 7 : Validation du formulaire
J'ai ajouté des validations aux champs du formulaire, et des messages d'erreur dans le template.

## TODO 8 : Bouton de retour
J'ai ajouté un bouton "Retour" qui redirige vers `/books` via `this.router.navigate`.

## TODO 9 : Erreur d’accès à `book.title`
J'ai encapsulé le contenu du composant de détail dans un `*ngIf="book"` pour éviter d'accéder à `book.title` avant que `book` soit défini.

## TODO 10 & 14 : Directive `highlight`
J'ai appliqué la directive `appHighlight` sur les titres des livres dans `book-detail` et `book-list`. Elle met le texte en gras si activée.

## TODO 12 : Bouton retour inactif
J'ai vérifié que `(click)="goBack()"` était bien relié à la méthode. Tout fonctionne.

## TODO 13 : Affichage de la liste
J'ai remplacé `*ngIf="data"` par `*ngIf="books"` dans `book-list.component.html` pour faire correspondre la variable utilisée.

## TODO 15 : Description tronquée
J'ai créé un pipe `truncate` qui limite la description à 20 caractères.

## TODO 16 : Alerte après ajout/retrait des favoris
J'ai ajouté un `alert()` après modification du favori pour informer l’utilisateur.

## TODO 17 : Alerte en cas d’erreur de favoris
J'ai ajouté une alerte dans le bloc `error` si la modification du favori échoue.

## TODO 18 : Alerte après suppression
J'affiche une alerte et recharge la liste après suppression réussie d’un livre.

## TODO 19 :
J’ai ajouté une alerte d’échec dans la suppression.

## TODO 20 : Titre en majuscules
J’ai utilisé le pipe `uppercase` dans la page d’accueil pour afficher le titre en majuscules.


