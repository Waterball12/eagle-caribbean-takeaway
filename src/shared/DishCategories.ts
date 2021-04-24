import React from "react";
import Breakfast from "../assets/categories/breakfast.svg";
import BreakfastMenu from "../assets/categories/breakfast.png";
import Desserts from "../assets/categories/desserts.svg";
import DessertsMenu from "../assets/categories/desserts.png";
import Drinks from "../assets/categories/drinks.svg";
import DrinksMenu from "../assets/categories/drinks.png";
import Extras from "../assets/categories/extras.svg";
import ExtrasMenu from "../assets/categories/extras.png";
import FishDishes from "../assets/categories/fish_dishes.svg";
import FishDishesMenu from "../assets/categories/fish_dishes.png";
import Mains from "../assets/categories/mains.svg";
import MainsMenu from "../assets/categories/mains.png";
import MiniMeals from "../assets/categories/mini-meals.svg";
import MiniMealsMenu from "../assets/categories/mini-meals.png";
import Patties from "../assets/categories/patties.svg";
import PattiesMenu from "../assets/categories/patties.png";
import Porridge from "../assets/categories/porridge.svg";
import PorridgeMenu from "../assets/categories/porridge.png";
import SideOrders from "../assets/categories/side_orders.svg";
import SideOrdersMenu from "../assets/categories/side_orders.png";
import Soup from "../assets/categories/soup.svg";
import SoupMenu from "../assets/categories/soup.png";
import Vegetarian from "../assets/categories/vegetarian.svg";
import VegetarianMenu from "../assets/categories/vegetarian.png";

export interface DishCategories {
    icon: any;
    name: string;
    menu: any;
}

const dishIcons: DishCategories[] = [
    {
        icon: Breakfast,
        name: "Breakfast",
        menu: BreakfastMenu
    },
    {
        icon: Desserts,
        name: "Desserts",
        menu: DessertsMenu
    },
    {
        icon: Drinks,
        name: "Drinks",
        menu: DrinksMenu
    },
    {
        icon: Extras,
        name: "Extras",
        menu: ExtrasMenu
    },
    {
        icon: FishDishes,
        name: "Fish Dishes",
        menu: FishDishesMenu
    },
    {
        icon: Mains,
        name: "Mains",
        menu: MainsMenu
    },
    {
        icon: MiniMeals,
        name: "Mini Meals",
        menu: MiniMealsMenu
    },
    {
        icon: Patties,
        name: "Patties",
        menu: PattiesMenu
    },
    {
        icon: Porridge,
        name: "Porridge",
        menu: PorridgeMenu
    },
    {
        icon: SideOrders,
        name: "Side Orders",
        menu: SideOrdersMenu
    },
    {
        icon: Soup,
        name: "Soup",
        menu: SoupMenu
    },
    {
        icon: Vegetarian,
        name: "Vegetarian",
        menu: VegetarianMenu
    },
]

export default dishIcons;
