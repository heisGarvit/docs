---
api_name: into_values()
excerpt: Returns the lowest values and associated data from a MinNBy aggregate
topics: [hyperfunctions]
tags: [hyperfunctions, toolkit, minimum]
api:
  license: community
  type: function
  experimental: true
  toolkit: true
  version:
    experimental: 1.12.0
hyperfunction:
  family: minimum and maximum
  type: accessor
  aggregates:
    - min_n_by()
api_details:
  summary: |
    This returns the smallest values seen by the aggregate and the
    corresponding values associated with them. Note that PostgresQL requires
    an input argument with type matching the associated value in order to
    deterimine the response type.
  signatures:
    - language: sql
      code: |
        into_values(
          agg MinNBy,
          dummy ANYELEMENT
        ) TABLE (
          value BIGINT | DOUBLE PRECISION | TIMESTAMPTZ, data ANYELEMENT
        )
  parameters:
    required:
      - name: agg
        type: MinNBy
        description: >
          The aggregate to return the results from.  Note that the exact type 
          here varies based on the type of data stored.
      - name: dummy
        type: ANYELEMENT
        description: >
          This is purely to inform PostgresQL of the response type.  A NULL
          cast to the appropriate type is typical.
    returns:
      - column: into_values
        type: TABLE (value BIGINT | DOUBLE PRECISION | TIMESTAMPTZ, data ANYELEMENT)
        description: >
          The smallest values and associated data seen while creating this aggregate.
  examples:
    - description: >
        Find the bottom 5 values from `i * 13 % 10007` for i = 1 to 10000, and
        the integer result of the operation that generated that modulus.
      command:
        language: sql
        code: |
          SELECT toolkit_experimental.into_values(
              toolkit_experimental.min_n_by(sub.mod, sub.div, 5),
              NULL::INT)
          FROM (
            SELECT (i * 13) % 10007 AS mod, (i * 13) / 10007 AS div
            FROM generate_series(1,10000) as i
          ) sub;
      return :
        language: sql
        code: |
          into_values 
          -------------
          (1,9)
          (2,5)
          (3,1)
          (4,10)
          (5,6)
---

