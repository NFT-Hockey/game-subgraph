// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get is_available(): boolean {
    let value = this.get("is_available");
    return value!.toBoolean();
  }

  set is_available(value: boolean) {
    this.set("is_available", Value.fromBoolean(value));
  }

  get statistics(): string {
    let value = this.get("statistics");
    return value!.toString();
  }

  set statistics(value: string) {
    this.set("statistics", Value.fromString(value));
  }

  get games(): Array<string> {
    let value = this.get("games");
    return value!.toStringArray();
  }

  set games(value: Array<string>) {
    this.set("games", Value.fromStringArray(value));
  }

  get deposit(): BigInt | null {
    let value = this.get("deposit");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set deposit(value: BigInt | null) {
    if (!value) {
      this.unset("deposit");
    } else {
      this.set("deposit", Value.fromBigInt(<BigInt>value));
    }
  }

  get friends(): Array<string> {
    let value = this.get("friends");
    return value!.toStringArray();
  }

  set friends(value: Array<string>) {
    this.set("friends", Value.fromStringArray(value));
  }

  get sent_friend_requests(): Array<string> {
    let value = this.get("sent_friend_requests");
    return value!.toStringArray();
  }

  set sent_friend_requests(value: Array<string>) {
    this.set("sent_friend_requests", Value.fromStringArray(value));
  }

  get friend_requests_received(): Array<string> {
    let value = this.get("friend_requests_received");
    return value!.toStringArray();
  }

  set friend_requests_received(value: Array<string>) {
    this.set("friend_requests_received", Value.fromStringArray(value));
  }

  get sent_requests_play(): Array<string> {
    let value = this.get("sent_requests_play");
    return value!.toStringArray();
  }

  set sent_requests_play(value: Array<string>) {
    this.set("sent_requests_play", Value.fromStringArray(value));
  }

  get requests_play_received(): Array<string> {
    let value = this.get("requests_play_received");
    return value!.toStringArray();
  }

  set requests_play_received(value: Array<string>) {
    this.set("requests_play_received", Value.fromStringArray(value));
  }
}

export class AccountWithDeposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccountWithDeposit entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AccountWithDeposit must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AccountWithDeposit", id.toString(), this);
    }
  }

  static load(id: string): AccountWithDeposit | null {
    return changetype<AccountWithDeposit | null>(
      store.get("AccountWithDeposit", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get deposit(): BigInt {
    let value = this.get("deposit");
    return value!.toBigInt();
  }

  set deposit(value: BigInt) {
    this.set("deposit", Value.fromBigInt(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }
}

export class UserStatistics extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserStatistics entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserStatistics must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserStatistics", id.toString(), this);
    }
  }

  static load(id: string): UserStatistics | null {
    return changetype<UserStatistics | null>(store.get("UserStatistics", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get victories(): i32 {
    let value = this.get("victories");
    return value!.toI32();
  }

  set victories(value: i32) {
    this.set("victories", Value.fromI32(value));
  }

  get losses(): i32 {
    let value = this.get("losses");
    return value!.toI32();
  }

  set losses(value: i32) {
    this.set("losses", Value.fromI32(value));
  }

  get total_reward(): BigInt {
    let value = this.get("total_reward");
    return value!.toBigInt();
  }

  set total_reward(value: BigInt) {
    this.set("total_reward", Value.fromBigInt(value));
  }

  get total_loss(): BigInt {
    let value = this.get("total_loss");
    return value!.toBigInt();
  }

  set total_loss(value: BigInt) {
    this.set("total_loss", Value.fromBigInt(value));
  }

  get total_goals(): i32 {
    let value = this.get("total_goals");
    return value!.toI32();
  }

  set total_goals(value: i32) {
    this.set("total_goals", Value.fromI32(value));
  }

  get total_misses(): i32 {
    let value = this.get("total_misses");
    return value!.toI32();
  }

  set total_misses(value: i32) {
    this.set("total_misses", Value.fromI32(value));
  }
}

export class Game extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Game entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Game must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Game", id.toString(), this);
    }
  }

  static load(id: string): Game | null {
    return changetype<Game | null>(store.get("Game", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user1(): string {
    let value = this.get("user1");
    return value!.toString();
  }

  set user1(value: string) {
    this.set("user1", Value.fromString(value));
  }

  get user2(): string {
    let value = this.get("user2");
    return value!.toString();
  }

  set user2(value: string) {
    this.set("user2", Value.fromString(value));
  }

  get reward(): BigInt {
    let value = this.get("reward");
    return value!.toBigInt();
  }

  set reward(value: BigInt) {
    this.set("reward", Value.fromBigInt(value));
  }

  get winner_index(): i32 {
    let value = this.get("winner_index");
    return value!.toI32();
  }

  set winner_index(value: i32) {
    this.set("winner_index", Value.fromI32(value));
  }

  get last_event_generation_time(): BigInt | null {
    let value = this.get("last_event_generation_time");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set last_event_generation_time(value: BigInt | null) {
    if (!value) {
      this.unset("last_event_generation_time");
    } else {
      this.set("last_event_generation_time", Value.fromBigInt(<BigInt>value));
    }
  }

  get player_with_puck(): string | null {
    let value = this.get("player_with_puck");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set player_with_puck(value: string | null) {
    if (!value) {
      this.unset("player_with_puck");
    } else {
      this.set("player_with_puck", Value.fromString(<string>value));
    }
  }

  get zone_number(): i32 {
    let value = this.get("zone_number");
    return value!.toI32();
  }

  set zone_number(value: i32) {
    this.set("zone_number", Value.fromI32(value));
  }

  get turns(): i32 {
    let value = this.get("turns");
    return value!.toI32();
  }

  set turns(value: i32) {
    this.set("turns", Value.fromI32(value));
  }

  get events(): Array<string> | null {
    let value = this.get("events");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set events(value: Array<string> | null) {
    if (!value) {
      this.unset("events");
    } else {
      this.set("events", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Event extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Event entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Event must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Event", id.toString(), this);
    }
  }

  static load(id: string): Event | null {
    return changetype<Event | null>(store.get("Event", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get player_with_puck(): string | null {
    let value = this.get("player_with_puck");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set player_with_puck(value: string | null) {
    if (!value) {
      this.unset("player_with_puck");
    } else {
      this.set("player_with_puck", Value.fromString(<string>value));
    }
  }

  get action(): string {
    let value = this.get("action");
    return value!.toString();
  }

  set action(value: string) {
    this.set("action", Value.fromString(value));
  }

  get zone_number(): i32 {
    let value = this.get("zone_number");
    return value!.toI32();
  }

  set zone_number(value: i32) {
    this.set("zone_number", Value.fromI32(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value!.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }

  get user1(): string {
    let value = this.get("user1");
    return value!.toString();
  }

  set user1(value: string) {
    this.set("user1", Value.fromString(value));
  }

  get user2(): string {
    let value = this.get("user2");
    return value!.toString();
  }

  set user2(value: string) {
    this.set("user2", Value.fromString(value));
  }
}

export class PlayerOnPosition extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PlayerOnPosition entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PlayerOnPosition must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PlayerOnPosition", id.toString(), this);
    }
  }

  static load(id: string): PlayerOnPosition | null {
    return changetype<PlayerOnPosition | null>(
      store.get("PlayerOnPosition", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get player(): string | null {
    let value = this.get("player");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set player(value: string | null) {
    if (!value) {
      this.unset("player");
    } else {
      this.set("player", Value.fromString(<string>value));
    }
  }

  get position(): string {
    let value = this.get("position");
    return value!.toString();
  }

  set position(value: string) {
    this.set("position", Value.fromString(value));
  }
}

export class Five extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Five entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Five must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Five", id.toString(), this);
    }
  }

  static load(id: string): Five | null {
    return changetype<Five | null>(store.get("Five", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get field_players(): Array<string> {
    let value = this.get("field_players");
    return value!.toStringArray();
  }

  set field_players(value: Array<string>) {
    this.set("field_players", Value.fromStringArray(value));
  }

  get number(): string {
    let value = this.get("number");
    return value!.toString();
  }

  set number(value: string) {
    this.set("number", Value.fromString(value));
  }

  get ice_time_priority(): string {
    let value = this.get("ice_time_priority");
    return value!.toString();
  }

  set ice_time_priority(value: string) {
    this.set("ice_time_priority", Value.fromString(value));
  }

  get tactic(): string {
    let value = this.get("tactic");
    return value!.toString();
  }

  set tactic(value: string) {
    this.set("tactic", Value.fromString(value));
  }

  get time_field(): i32 {
    let value = this.get("time_field");
    return value!.toI32();
  }

  set time_field(value: i32) {
    this.set("time_field", Value.fromI32(value));
  }
}

export class Team extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Team entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Team must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Team", id.toString(), this);
    }
  }

  static load(id: string): Team | null {
    return changetype<Team | null>(store.get("Team", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fives(): Array<string> {
    let value = this.get("fives");
    return value!.toStringArray();
  }

  set fives(value: Array<string>) {
    this.set("fives", Value.fromStringArray(value));
  }

  get active_five(): string {
    let value = this.get("active_five");
    return value!.toString();
  }

  set active_five(value: string) {
    this.set("active_five", Value.fromString(value));
  }

  get penalty_players(): Array<string> {
    let value = this.get("penalty_players");
    return value!.toStringArray();
  }

  set penalty_players(value: Array<string>) {
    this.set("penalty_players", Value.fromStringArray(value));
  }

  get goalies(): Array<string> {
    let value = this.get("goalies");
    return value!.toStringArray();
  }

  set goalies(value: Array<string>) {
    this.set("goalies", Value.fromStringArray(value));
  }

  get active_goalie(): string {
    let value = this.get("active_goalie");
    return value!.toString();
  }

  set active_goalie(value: string) {
    this.set("active_goalie", Value.fromString(value));
  }

  get score(): i32 {
    let value = this.get("score");
    return value!.toI32();
  }

  set score(value: i32) {
    this.set("score", Value.fromI32(value));
  }
}

export class UserInGameInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserInGameInfo entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserInGameInfo must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserInGameInfo", id.toString(), this);
    }
  }

  static load(id: string): UserInGameInfo | null {
    return changetype<UserInGameInfo | null>(store.get("UserInGameInfo", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get team(): string {
    let value = this.get("team");
    return value!.toString();
  }

  set team(value: string) {
    this.set("team", Value.fromString(value));
  }

  get take_to_called(): boolean {
    let value = this.get("take_to_called");
    return value!.toBoolean();
  }

  set take_to_called(value: boolean) {
    this.set("take_to_called", Value.fromBoolean(value));
  }

  get coach_speech_called(): boolean {
    let value = this.get("coach_speech_called");
    return value!.toBoolean();
  }

  set coach_speech_called(value: boolean) {
    this.set("coach_speech_called", Value.fromBoolean(value));
  }

  get is_goalie_out(): boolean {
    let value = this.get("is_goalie_out");
    return value!.toBoolean();
  }

  set is_goalie_out(value: boolean) {
    this.set("is_goalie_out", Value.fromBoolean(value));
  }
}

export class FieldPlayer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FieldPlayer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type FieldPlayer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FieldPlayer", id.toString(), this);
    }
  }

  static load(id: string): FieldPlayer | null {
    return changetype<FieldPlayer | null>(store.get("FieldPlayer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user_in_game_info(): string {
    let value = this.get("user_in_game_info");
    return value!.toString();
  }

  set user_in_game_info(value: string) {
    this.set("user_in_game_info", Value.fromString(value));
  }

  get img(): string | null {
    let value = this.get("img");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set img(value: string | null) {
    if (!value) {
      this.unset("img");
    } else {
      this.set("img", Value.fromString(<string>value));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get teamwork(): BigDecimal | null {
    let value = this.get("teamwork");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set teamwork(value: BigDecimal | null) {
    if (!value) {
      this.unset("teamwork");
    } else {
      this.set("teamwork", Value.fromBigDecimal(<BigDecimal>value));
    }
  }

  get reality(): boolean {
    let value = this.get("reality");
    return value!.toBoolean();
  }

  set reality(value: boolean) {
    this.set("reality", Value.fromBoolean(value));
  }

  get nationality(): string {
    let value = this.get("nationality");
    return value!.toString();
  }

  set nationality(value: string) {
    this.set("nationality", Value.fromString(value));
  }

  get birthday(): BigInt {
    let value = this.get("birthday");
    return value!.toBigInt();
  }

  set birthday(value: BigInt) {
    this.set("birthday", Value.fromBigInt(value));
  }

  get player_type(): string {
    let value = this.get("player_type");
    return value!.toString();
  }

  set player_type(value: string) {
    this.set("player_type", Value.fromString(value));
  }

  get number_of_penalty_events(): BigInt {
    let value = this.get("number_of_penalty_events");
    return value!.toBigInt();
  }

  set number_of_penalty_events(value: BigInt) {
    this.set("number_of_penalty_events", Value.fromBigInt(value));
  }

  get number(): i32 {
    let value = this.get("number");
    return value!.toI32();
  }

  set number(value: i32) {
    this.set("number", Value.fromI32(value));
  }

  get hand(): string {
    let value = this.get("hand");
    return value!.toString();
  }

  set hand(value: string) {
    this.set("hand", Value.fromString(value));
  }

  get player_role(): string {
    let value = this.get("player_role");
    return value!.toString();
  }

  set player_role(value: string) {
    this.set("player_role", Value.fromString(value));
  }

  get native_position(): string {
    let value = this.get("native_position");
    return value!.toString();
  }

  set native_position(value: string) {
    this.set("native_position", Value.fromString(value));
  }

  get stats(): string {
    let value = this.get("stats");
    return value!.toString();
  }

  set stats(value: string) {
    this.set("stats", Value.fromString(value));
  }
}

export class Goalie extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Goalie entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Goalie must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Goalie", id.toString(), this);
    }
  }

  static load(id: string): Goalie | null {
    return changetype<Goalie | null>(store.get("Goalie", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get img(): string | null {
    let value = this.get("img");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set img(value: string | null) {
    if (!value) {
      this.unset("img");
    } else {
      this.set("img", Value.fromString(<string>value));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get goalie_number(): string {
    let value = this.get("goalie_number");
    return value!.toString();
  }

  set goalie_number(value: string) {
    this.set("goalie_number", Value.fromString(value));
  }

  get reality(): boolean {
    let value = this.get("reality");
    return value!.toBoolean();
  }

  set reality(value: boolean) {
    this.set("reality", Value.fromBoolean(value));
  }

  get nationality(): string {
    let value = this.get("nationality");
    return value!.toString();
  }

  set nationality(value: string) {
    this.set("nationality", Value.fromString(value));
  }

  get birthday(): BigInt {
    let value = this.get("birthday");
    return value!.toBigInt();
  }

  set birthday(value: BigInt) {
    this.set("birthday", Value.fromBigInt(value));
  }

  get player_type(): string {
    let value = this.get("player_type");
    return value!.toString();
  }

  set player_type(value: string) {
    this.set("player_type", Value.fromString(value));
  }

  get number(): i32 {
    let value = this.get("number");
    return value!.toI32();
  }

  set number(value: i32) {
    this.set("number", Value.fromI32(value));
  }

  get hand(): string {
    let value = this.get("hand");
    return value!.toString();
  }

  set hand(value: string) {
    this.set("hand", Value.fromString(value));
  }

  get player_role(): string {
    let value = this.get("player_role");
    return value!.toString();
  }

  set player_role(value: string) {
    this.set("player_role", Value.fromString(value));
  }

  get stats(): string {
    let value = this.get("stats");
    return value!.toString();
  }

  set stats(value: string) {
    this.set("stats", Value.fromString(value));
  }
}
