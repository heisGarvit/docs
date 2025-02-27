---
api_name: duration_in()
excerpt: Calculate the total time spent in a given state from values in a state aggregate
topics: [hyperfunctions]
keywords: [hyperfunctions, duration, states, hyperfunctions, Toolkit]
api:
  license: community
  type: function
  experimental: true
  toolkit: true
  version:
    experimental: 1.5.0
hyperfunction:
  family: state aggregates
  type: accessor
  aggregates:
    - state_agg() | timeline_agg()
---

import Experimental from 'versionContent/_partials/_experimental.mdx';

# duration_in()  <tag type="toolkit">Toolkit</tag><tag type="experimental-toolkit">Experimental</tag>

Use this function to report the total duration for a given state in a [state aggregate][state_agg].

<Experimental />

## Required arguments

|Name|Type|Description|
|-|-|-|
|`state`|`TEXT` or `BIGINT`|State to query|
|`aggregate`|`StateAgg` or `TimelineAgg`|Previously created aggregate|

## Returns

|Column|Type|Description|
|-|-|-|
|`duration_in`|`INTERVAL`|The total time spent in the target state. Displayed as `days`, `hh:mm:ss`, or a combination of the two.|

## Sample usage

This example creates a simple test table:

```sql
SET timezone TO 'UTC';
CREATE TABLE states(time TIMESTAMPTZ, state TEXT);
INSERT INTO states VALUES
  ('1-1-2020 10:00', 'starting'),
  ('1-1-2020 10:30', 'running'),
  ('1-3-2020 16:00', 'error'),
  ('1-3-2020 18:30', 'starting'),
  ('1-3-2020 19:30', 'running'),
  ('1-5-2020 12:00', 'stopping');
```

You can query this table for the time spent in the running state, like this:

```sql
SELECT toolkit_experimental.duration_in(
  'running',
  toolkit_experimental.state_agg(time, state)
) FROM states;
```

Which gives the result:

```sql
duration_in  
---------------
3 days 22:00:00
```

If you prefer to see the result in seconds, [`EXTRACT`][extract] the epoch from
the returned result.

[extract]: https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-EXTRACT
[state_agg]: /api/:currentVersion:/hyperfunctions/state-aggregates/state_agg/
