<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { db } from "$lib/stores/db";
  import CustomSelect from "./CustomSelect.svelte";
  import SearchIcon from "../icons/SearchIcon.svelte";
  import { download } from "$lib/utils/helpers";

  const dispatch = createEventDispatcher();
  const searchParams = ["Order by Disc Code", "Order by Phone Number"];
  let selectedSearchParam = searchParams[0];

  function handleSearch(e: Event) {
    let returned = [];
    let searchValue = (<HTMLInputElement>e.target).value;

    if (!searchValue.trim()) {
      returned = [];
      dispatch("search", { searching: false, returned });
      return;
    }

    $db.forEach(item => {
      switch (selectedSearchParam) {
        case searchParams[0]:
          if (item.discCode.indexOf(searchValue) > -1) {
            returned = [...returned, item];
          }
          break;
        case searchParams[1]:
          if (item.phoneNo.indexOf(searchValue) > -1) {
            returned = [...returned, item];
          }
          break;
      }
    });

    dispatch("search", { searching: true, returned });
  }

  const handleDownload = () => download($db, "db.json", "text/plain");
</script>

<section>
  <div class="input-wrapper">
    <input type="search" placeholder="Search" on:keyup={e => handleSearch(e)} />
    <div class="icon">
      <SearchIcon />
    </div>
  </div>

  <div class="select">
    <CustomSelect
      items={searchParams}
      activeItem={selectedSearchParam}
      on:select={e => (selectedSearchParam = e.detail)}
    />
  </div>

  <button class="download" on:click={handleDownload}>
    <div class="icon">
      <!--  -->
    </div>
    Download JSON
  </button>
</section>

<style lang="scss">
  section {
    width: 100%;
    padding: 15px;
    background: rgba(#515777, 0.05);
    margin-bottom: 30px;
    border-radius: 8px;
    @include flex(flex-start);
  }

  .input-wrapper {
    position: relative;
    margin-right: 10px;

    input {
      background: white;
      padding: 12px;
      padding-left: 40px;
      border-radius: 8px;
      font-size: 16px;
      border: 1px solid rgba(#515777, 0.2);

      &:focus {
        border-color: rgba(#515777, 0.8);
      }
    }

    .icon {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      @include flex;
      padding: 15px;

      :global(svg) {
        fill: #515777;
      }
    }
  }

  .select {
    color: rgba(#515777, 0.9);
    width: 250px;
    margin-right: 10px;

    :global {
      .item-select__trigger {
        background: white;
        border-radius: 8px;
        border: 1px solid rgba(#515777, 0.2);
        svg {
          fill: rgba(#515777, 0.9);
        }
      }

      .item-options {
        border-radius: 8px;
        box-shadow: 0px 4px 21px rgba(#bcbec4, 0.8);
      }
    }
  }

  .download {
    padding: 12px;
    border: 1px solid rgba(#515777, 0.2);
    border-radius: 8px;
    @include flex(flex-start);
    margin-left: auto;
  }
</style>
