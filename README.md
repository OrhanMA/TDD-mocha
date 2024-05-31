# Introduction au TDD

Le TDD se déroule en plusieurs étapes :

- Écrire un test : Commencez par écrire un test qui couvre une fonctionnalité ou une exigence.
- Vérifier que le test échoue : Exécutez le test pour vous assurer qu'il échoue (la fonctionnalité n'est pas encore implémentée).
- Implémenter la fonctionnalité : Écrivez le code minimal nécessaire pour faire passer le test.
- Réviser les tests pour de nouvelles exigences : Ajoutez ou modifiez des tests pour couvrir de nouvelles fonctionnalités ou des cas particuliers.
- Vérifier que les tests échouent : Exécutez les tests mis à jour pour vous assurer qu'ils échouent (les nouvelles exigences ne sont pas encore implémentées).
- Réimplémenter le code : Modifiez le code pour satisfaire aux nouvelles exigences et faire passer les tests.
- Ce cycle se répète jusqu'à ce que toutes les fonctionnalités soient implémentées et que tous les tests passent.

## Installation

```
git clone git@github.com:OrhanMA/TDD-mocha.git
cd TDD-mocha
npm install
```

## Exécuter les tests

`npm run test test/cube/test_geometrie.js`
`npm run test test/avion/test_calculs.js`
