module.exports = [
  {
    title: "API Reference",
    filePath: "index.md",
    href: "api",
    name: "API Reference",
    excerpt:
      "The API Reference is your go-to resource for all functions, VIEWs and special feature interfaces available with the TimescaleDB extension",
    description:
      "User-defined actions allow you to run functions and procedures implemented in a language of your choice on a schedule within TimescaleDB. This allows...",
    children: [
      {
        title: "Hypertables & chunks",
        type: "directory",
        href: "hypertable",
        children: [
          {
            title: "create_hypertable",
            href: "create_hypertable",
          },
          {
            title: "show_chunks",
            href: "show_chunks",
          },
          {
            title: "drop_chunks",
            href: "drop_chunks",
          },
          {
            title: "reorder_chunk",
            href: "reorder_chunk",
          },
          {
            title: "move_chunk",
            href: "move_chunk",
          },
          {
            title: "add_reorder_policy",
            href: "add_reorder_policy",
          },
          {
            title: "remove_reorder_policy",
            href: "remove_reorder_policy",
          },
          {
            title: "attach_tablespace",
            href: "attach_tablespace",
          },
          {
            title: "detach_tablespace",
            href: "detach_tablespace",
          },
          {
            title: "detach_tablespaces",
            href: "detach_tablespaces",
          },
          {
            title: "show_tablespaces",
            href: "show_tablespaces",
          },
          {
            title: "set_chunk_time_interval",
            href: "set_chunk_time_interval",
          },
          {
            title: "set_integer_now_func",
            href: "set_integer_now_func",
          },
          {
            title: "add_dimension",
            href: "add_dimension",
          },
          {
            title: "create_index (transaction per chunk)",
            href: "create_index",
          },
          {
            title: "hypertable_size",
            href: "hypertable_size",
          },
          {
            title: "hypertable_detailed_size",
            href: "hypertable_detailed_size",
          },
          {
            title: "hypertable_index_size",
            href: "hypertable_index_size",
          },
          {
            title: "chunks_detailed_size",
            href: "chunks_detailed_size",
          },
        ],
      },
      {
        title: "Distributed hypertables",
        type: "directory",
        href: "distributed-hypertables",
        children: [
          {
            title: "create_distributed_hypertable",
            href: "create_distributed_hypertable",
          },
          {
            title: "add_data_node",
            href: "add_data_node",
          },
          {
            title: "attach_data_node",
            href: "attach_data_node",
          },
          {
            title: "detach_data_node",
            href: "detach_data_node",
          },
          {
            title: "delete_data_node",
            href: "delete_data_node",
          },
          {
            title: "distributed_exec",
            href: "distributed_exec",
          },
          {
            title: "set_number_partitions",
            href: "set_number_partitions",
          },
          {
            title: "set_replication_factor",
            href: "set_replication_factor",
          },
          {
            title: "copy_chunk",
            href: "copy_chunk_experimental",
          },
          {
            title: "move_chunk",
            href: "move_chunk_experimental",
          },
          {
            title: "cleanup_copy_chunk_operation",
            href: "cleanup_copy_chunk_operation_experimental",
          },
          {
            title: "create_distributed_restore_point",
            href: "create_distributed_restore_point",
          },
        ],
      },
      {
        title: "Compression",
        type: "directory",
        href: "compression",
        description:
          "We highly recommend reading the blog post and tutorial about compression before trying to set it up for the first time.",
        children: [
          {
            title: "ALTER TABLE (Compression)",
            href: "alter_table_compression",
          },
          {
            title: "add_compression_policy",
            href: "add_compression_policy",
          },
          {
            title: "remove_compression_policy",
            href: "remove_compression_policy",
          },
          {
            title: "compress_chunk",
            href: "compress_chunk",
          },
          {
            title: "decompress_chunk",
            href: "decompress_chunk",
          },
          {
            title: "recompress_chunk",
            href: "recompress_chunk",
          },
          {
            title: "hypertable_compression_stats",
            href: "hypertable_compression_stats",
          },
          {
            title: "chunk_compression_stats",
            href: "chunk_compression_stats",
          },
        ],
      },
      {
        title: "Continuous aggregates",
        type: "directory",
        href: "continuous-aggregates",
        children: [
          {
            title: "CREATE MATERIALIZED VIEW (Continuous Aggregate)",
            href: "create_materialized_view",
          },
          {
            title: "ALTER MATERIALIZED VIEW (Continuous Aggregate)",
            href: "alter_materialized_view",
          },
          {
            title: "DROP MATERIALIZED VIEW (Continuous Aggregate)",
            href: "drop_materialized_view",
          },
          {
            title: "refresh_continuous_aggregate",
            href: "refresh_continuous_aggregate",
          },
          {
            title: "add_continuous_aggregate_policy",
            href: "add_continuous_aggregate_policy",
          },
          {
            title: "add_policies",
            href: "add_policies",
          },
          {
            title: "alter_policies",
            href: "alter_policies",
          },
          {
            title: "show_policies",
            href: "show_policies",
          },
          {
            title: "remove_continuous_aggregate_policy",
            href: "remove_continuous_aggregate_policy",
          },
          {
            title: "cagg_migrate",
            href: "cagg_migrate",
          },
          {
            title: "remove_policies",
            href: "remove_policies",
          },
          {
            title: "remove_all_policies",
            href: "remove_all_policies",
          },
        ],
      },
      {
        title: "Data retention",
        type: "directory",
        href: "data-retention",
        children: [
          {
            title: "add_retention_policy",
            href: "add_retention_policy",
          },
          {
            title: "remove_retention_policy",
            href: "remove_retention_policy",
          },
        ],
      },
      {
        title: "Actions and automation",
        type: "directory",
        href: "actions",
        children: [
          {
            title: "add_job",
            href: "add_job",
          },
          {
            title: "alter_job",
            href: "alter_job",
          },
          {
            title: "delete_job",
            href: "delete_job",
          },
          {
            title: "run_job",
            href: "run_job",
          },
        ],
      },
      {
        title: "Hyperfunctions",
        type: "directory",
        href: "hyperfunctions",
        children: [
          {
            title: "approximate_row_count",
            href: "approximate_row_count",
          },
          {
            title: "first",
            href: "first",
          },
          {
            title: "last",
            href: "last",
          },
          {
            title: "histogram",
            href: "histogram",
          },
          {
            title: "time_bucket",
            href: "time_bucket",
          },
          {
            title: "time_bucket_ng",
            href: "time_bucket_ng",
          },
          {
            title: "days_in_month",
            href: "days_in_month",
          },
          {
            title: "month_normalize",
            href: "month_normalize",
          },
          {
            title: "Approximate count distinct",
            href: "approximate-count-distinct",
            type: "redirect-to-child-page",
            children: [
              {
                title: "hyperloglog",
                href: "hyperloglog",
                type: "placeholder",
              },
            ],
          },
          {
            title: "Saturating math",
            type: "directory",
            href: "saturating_math",
            children: [
              {
                title: "saturating_add",
                href: "saturating_add",
              },
              {
                title: "saturating_add_pos",
                href: "saturating_add_pos",
              },
              {
                title: "saturating_mul",
                href: "saturating_mul",
              },
              {
                title: "saturating_sub",
                href: "saturating_sub",
              },
              {
                title: "saturating_sub_pos",
                href: "saturating_sub_pos",
              },
            ],
          },
          {
            title: "Statistical and regression analysis",
            href: "statistical-and-regression-analysis",
            type: "redirect-to-child-page",
            children: [
              {
                title: "stats_agg (one variable)",
                href: "stats_agg-one-variable",
                type: "placeholder",
              },
              {
                title: "stats_agg (two variables)",
                href: "stats_agg-two-variables",
                type: "placeholder",
              },
            ],
          },
          {
            title: "Minimum and maximum",
            href: "minimum-and-maximum",
            type: "redirect-to-child-page",
            children: [
              {
                title: "min_n",
                href: "min_n",
                type: "placeholder",
              },
              {
                title: "max_n",
                href: "max_n",
                type: "placeholder",
              },
              {
                title: "min_n_by",
                href: "min_n_by",
                type: "placeholder",
              },
              {
                title: "max_n_by",
                href: "max_n_by",
                type: "placeholder",
              },
            ],
          },
          {
            title: "Financial analysis",
            href: "financial-analysis",
            type: "redirect-to-child-page",
            children: [
              {
                title: "candlestick_agg",
                href: "candlestick_agg",
                type: "placeholder",
              },
              {
                title: "ohlc",
                href: "ohlc",
                type: "placeholder",
              },
            ],
          },
          {
            title: "Gapfilling and interpolation",
            type: "directory",
            href: "gapfilling-interpolation",
            children: [
              {
                title: "time_bucket_gapfill",
                href: "time_bucket_gapfill",
              },
              {
                title: "locf",
                href: "locf",
              },
              {
                title: "interpolate",
                href: "interpolate",
              },
            ],
          },
          {
            title: "Percentile approximation",
            href: "percentile-approximation",
            type: "redirect-to-child-page",
            children: [
              {
                title: "percentile_agg and uddsketch",
                href: "uddsketch",
                type: "placeholder",
              },
              {
                title: "tdigest",
                href: "tdigest",
                type: "placeholder",
              },
            ],
          },
          {
            title: "Metric aggregation (counters and gauges)",
            type: "directory",
            href: "counter_aggs",
            children: [
              {
                title: "counter_agg (point form)",
                href: "counter_agg_point",
              },
              {
                title: "gauge_agg",
                href: "gauge_agg",
              },
              {
                title: "rollup",
                href: "rollup-counter",
              },
              {
                title: "corr",
                href: "corr-counter",
              },
              {
                title: "counter_zero_time",
                href: "counter_zero_time",
              },
              {
                title: "delta",
                href: "delta",
              },
              {
                title: "extrapolated_delta",
                href: "extrapolated_delta",
              },
              {
                title: "extrapolated_rate",
                href: "extrapolated_rate",
              },
              {
                title: "first_time, last_time",
                href: "first-last-time-counter",
              },
              {
                title: "first_val, last_val",
                href: "first-last-val-counter",
              },
              {
                title: "interpolated_delta",
                href: "interpolated_delta",
              },
              {
                title: "interpolated_rate",
                href: "interpolated_rate",
              },
              {
                title: "idelta",
                href: "idelta",
              },
              {
                title: "intercept",
                href: "intercept-counter",
              },
              {
                title: "irate",
                href: "irate",
              },
              {
                title: "num_changes",
                href: "num_changes",
              },
              {
                title: "num_elements",
                href: "num_elements",
              },
              {
                title: "num_resets",
                href: "num_resets",
              },
              {
                title: "rate",
                href: "rate",
              },
              {
                title: "slope",
                href: "slope-counter",
              },
              {
                title: "time_delta",
                href: "time_delta",
              },
              {
                title: "with_bounds",
                href: "with_bounds",
              },
            ],
          },
          {
            title: "Time-weighted calculations",
            href: "time-weighted-calculations",
            type: "redirect-to-child-page",
            children: [
              {
                title: "time_weight",
                href: "time_weight",
                type: "placeholder",
              },
            ],
          },
          {
            title: "Downsample",
            type: "directory",
            href: "downsample",
            children: [
              {
                title: "asap",
                href: "asap",
              },
              {
                title: "lttb",
                href: "lttb",
              },
              {
                title: "gp_lttb",
                href: "gp_lttb",
              },
            ],
          },
          {
            title: "Frequency Analysis",
            type: "directory",
            href: "frequency-analysis",
            children: [
              {
                title: "freq_agg",
                href: "freq_agg",
              },
              {
                title: "topn_agg",
                href: "topn_agg",
              },
              {
                title: "topn",
                href: "topn",
              },
              {
                title: "count_min_sketch",
                href: "count_min_sketch",
              },
              {
                title: "approx_count",
                href: "approx_count",
              },
              {
                title: "into_values (for freq_agg)",
                href: "into_values-freq_agg",
              },
              {
                title: "min_frequency / max_frequency",
                href: "min_frequency-max_frequency",
              },
            ],
          },
          {
            title: "State aggregates",
            type: "directory",
            href: "state-aggregates",
            children: [
              {
                title: "state_agg",
                href: "state_agg",
              },
              {
                title: "duration_in",
                href: "duration_in",
              },
              {
                title: "interpolated_duration_in",
                href: "interpolated_duration_in",
              },
              {
                title: "into_values (for state_agg)",
                href: "into_values-state_agg",
              },
              {
                title: "rollup (for state_agg)",
                href: "rollup-state_agg",
              },
              {
                title: "state_timeline",
                href: "state_timeline",
              },
              {
                title: "state_periods",
                href: "state_periods",
              },
              {
                title: "interpolated_state_periods",
                href: "interpolated_state_periods",
              },
              {
                title: "interpolated_state_timeline",
                href: "interpolated_state_timeline",
              },
              {
                title: "heartbeat_agg",
                href: "heartbeat_agg",
                type: "placeholder",
              },
            ],
          },
        ],
      },
      {
        title: "Informational views",
        type: "directory",
        href: "informational-views",
        children: [
          {
            title: "timescaledb_information.chunks",
            href: "chunks",
          },
          {
            title: "timescaledb_information.continuous_aggregates",
            href: "continuous_aggregates",
          },
          {
            title: "timescaledb_information.compression_settings",
            href: "compression_settings",
          },
          {
            title: "timescaledb_information.data_nodes",
            href: "data_nodes",
          },
          {
            title: "timescaledb_information.dimensions",
            href: "dimensions",
          },
          {
            title: "timescaledb_information.hypertables",
            href: "hypertables",
          },
          {
            title: "timescaledb_information.jobs",
            href: "jobs",
          },
          {
            title: "timescaledb_information.job_stats",
            href: "job_stats",
          },
          {
            title: "timescaledb_experimental.policies",
            href: "policies",
          },
        ],
      },
      {
        href: "configuration",
        excerpt: "Configure PostgreSQL and TimescaleDB",
      },
      {
        title: "Administration Functions",
        type: "directory",
        href: "administration",
        description:
          "These administrative APIs help you prepare a database before and after a restore event, and also helps you keep track of your TimescaleDB setup data.",
        children: [
          {
            title: "timescaledb_pre_restore",
            href: "timescaledb_pre_restore",
          },
          {
            title: "timescaledb_post_restore",
            href: "timescaledb_post_restore",
          },
          {
            title: "get_telemetry_report",
            href: "get_telemetry_report",
          },
          {
            title: "dump_meta_data",
            href: "dump_meta_data",
          },
        ],
      },
      {
        title: "API Reference Tag Overview",
        href: "api-tag-overview",
        description:
          "An overview of what different tags represent in the API section of Timescale Documentation.",
      },
    ],
  },
];
